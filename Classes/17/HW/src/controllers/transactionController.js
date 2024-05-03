const validatorJs = require('validatorjs');
const { getCurrentTimeWithSeconds } = require('../services/utils.js');
const { getTransactionList, getFullTransascionList, addATransaction, updateATransaction } = require('../services/transactionService.js');
const {responseSummary , responseVerdicts} = require('../constants/response.js');
const getAllTransactions = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        responseSummary: responseSummary.LIST_OF_ALL_TRANSACTION,
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
            responseSummary: responseSummary.VALIDATION_FAILED,
            errors: validation.errors.all(),
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        return;
    }

    ctx.body = {
        responseSummary: responseSummary.ADD_A_TRANSACTION,
        verdict: addATransaction(ctx.request.body),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 201;
};

const getTransactionsByUserId = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        responseSummary: responseSummary.LIST_OF_ALL_TRANSACTION_OF_A_USER,
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
            responseSummary: responseSummary.VALIDATION_FAILED,
            errors: validation.errors.all(),
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        return;
    }

    const verdict = updateATransaction(ctx.request.body);
    ctx.body = {
        responseSummary: responseSummary.UPDATE_A_TRANSACTION,
        verdict: verdict,
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = (verdict === responseVerdicts.TRANSACTION_UPDATED_SUCCESSFULLY) ? 200 : 404;
};

module.exports = { getAllTransactions, addTransaction, getTransactionsByUserId, updateTransactionById };
