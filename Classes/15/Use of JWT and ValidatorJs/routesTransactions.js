const Router = require('koa-router');
const validatorJs = require('validatorjs');
const { getCurrentTimeWithSeconds,

    getTransactionList,
    getFullTransascionList,
    addATransaction,
    updateATransaction } = require('./utils');

const router = new Router();

router.get('/history', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    welcomeMessage = 'Welcome to PICCO GET /transactions/history API!';
    ctx.body = {
        responseSummary: 'List of all transactions in the system',
        transactions: getFullTransascionList(),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 200;
    return;
});

router.post('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    const rules = {
        id: 'required|numeric',
        senderId: 'required|numeric',
        receiverId: 'required|numeric',
        amount: 'required|numeric',
        eventId : 'required|numeric',
        details : 'required|string',
        hash : 'required|string',
    };

    const validation = new validatorJs(ctx.request.body, rules);

    if (validation.fails()) {
        ctx.status = 400;
        ctx.body = {
            responseSummary: 'Validation failed',
            errors: validation.errors.all(),
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        return;
    }

    ctx.body = {
        responseSummary: 'Add a transaction to the system',
        verdict: addATransaction(ctx.request.body),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 201;
    return;
});

router.get('/:id', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        responseSummary: 'List of all transaction of a user',
        userTransactions: getTransactionList(ctx.params.id),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 200;
    return;
});




router.put('/:id', (ctx) => {

    const requestInboundTime = getCurrentTimeWithSeconds();

    const rules = {
        id: 'required|numeric',
        senderId: 'required|numeric',
        receiverId: 'required|numeric',
        amount: 'required|numeric',
        eventId : 'required|numeric',
        details : 'required|string',
        hash : 'required|string',
    };

    const validation = new validatorJs(ctx.request.body, rules);

    if (validation.fails()) {
        ctx.status = 400;
        ctx.body = {
            responseSummary: 'Validation failed',
            errors: validation.errors.all(),
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        return;
    }

    ctx.body = {
        responseSummary: 'Update a transaction of the system',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    const verdict = updateATransaction(ctx.request.body);
    ctx.body.verdict = verdict;
    ctx.status = (verdict === "Transaction updated successfully!") ? 200 : 404;

    return;
});





module.exports = router;