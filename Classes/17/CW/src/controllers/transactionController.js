const validatorJs = require('validatorjs');
const { getCurrentTimeWithSeconds } = require('../services/utils.js');
const { getTransactionList, getFullTransascionList, addATransaction, updateATransaction } = require('../services/transactionService.js');

const getAllTransactions = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        responseSummary: 'List of all transactions in the system',
        transactions: getFullTransascionList(),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 200;
};

const addTransaction = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    const rules = {
        id: 'required|numeric',
        senderId: 'required|numeric',
        receiverId: 'required|numeric',
        amount: 'required|numeric',
        eventId: 'required|numeric',
        details: 'required|string',
        hash: 'required|string',
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
};

const getTransactionsByUserId = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        responseSummary: 'List of all transaction of a user',
        userTransactions: getTransactionList(ctx.params.id),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 200;
};

const updateTransactionById = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    const rules = {
        id: 'required|numeric',
        senderId: 'required|numeric',
        receiverId: 'required|numeric',
        amount: 'required|numeric',
        eventId: 'required|numeric',
        details: 'required|string',
        hash: 'required|string',
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

    const verdict = updateATransaction(ctx.request.body);
    ctx.body = {
        responseSummary: 'Update a transaction of the system',
        verdict: verdict,
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = (verdict === "Transaction updated successfully!") ? 200 : 404;
};

module.exports = { getAllTransactions, addTransaction, getTransactionsByUserId, updateTransactionById };
