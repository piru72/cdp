const { getCurrentTimeWithSeconds } = require("./utils.js");
const { TRANSACTIONS } = require("../data.js");

const getFullTransascionList = () => {
    return TRANSACTIONS;
};
const getTransactionList = (id) => {
    return TRANSACTIONS.filter((transaction) => transaction.receiverId === parseInt(id));
}
const addATransaction = (body) => {

    const verdict = "Transaction added successfully!"
    TRANSACTIONS.push({
        id: TRANSACTIONS.length + 1,
        senderId: body.senderId,
        receiverId: body.receiverId,
        amount: body.amount,
        description: body.description,
        transactionTime: getCurrentTimeWithSeconds(),
    });
    return verdict;
};

const updateATransaction = (body) => {
    let verdict = "Transaction updated successfully!";
    const transaction = TRANSACTIONS.find((transaction) => transaction.id === body.id);
    if (transaction) {
        transaction.senderId = body.senderId;
        transaction.receiverId = body.receiverId;
        transaction.amount = body.amount;
        transaction.description = body.description;
        transaction.transactionTime = getCurrentTimeWithSeconds();
    }
    else {
        verdict = "Transaction not found!";
    }
    return verdict;
}



module.exports = {
    getFullTransascionList,
    addATransaction,
    updateATransaction,
    getTransactionList
};