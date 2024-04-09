const {
    USERS,
    PANEL_DATA,
    POSITIONS,
    EVENTS,
    TRANSACTIONS
} = require('./data.js');

const getCurrentTimeWithSeconds = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

const isAdmin = (body) => {
    return false;
};
const getFullPositionList = () => {
    return POSITIONS;
};


const getFullPanelList = (id) => {
    return PANEL_DATA;

};

const getPanelList = (id) => {

    const exactPanel = PANEL_DATA.filter((panel) => panel.session === id).map((panel) => panel.data)[0];
    const panelList = exactPanel.map((panel) => {
        const position = getFullPositionList().find((position) => position.id === panel.positionId);
        if (position) {
            panel.position = position.name;
            delete panel.positionId;
        }
        return panel;
    });

    return panelList;

};

const getTransactionList = (id) => {
    return TRANSACTIONS.filter((transaction) => transaction.receiverId === parseInt(id)) ;
}

const getPanelMemberTotalBalance = (id) => {
   
    let totalBalance = 0;
    const userTransactions = TRANSACTIONS.filter((transaction) => transaction.receiverId === parseInt(id));
    userTransactions.forEach((transaction) => {
        totalBalance += parseFloat(transaction.amount);
    });

    
    return totalBalance;
}

const getBalanceOfEachPanelMember = (id) => {
    const panelList = getPanelList(id);
    const balanceList = panelList.map((panel) => {
        const balance = getPanelMemberTotalBalance(panel.id);
        return {
            name: panel.name,
            balance: balance
        };
    });

    
    balanceList.sort((a, b) => {
        return b.balance - a.balance;
    });
    return balanceList;
}
const getFullTransascionList = () => {
    return TRANSACTIONS;
};
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
    else 
    {
        verdict = "Transaction not found!";
    }
    return verdict;
}





const createUsers = (body) => {
    USERS.push({
        id: USERS.length + 1,
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role,
        userCreated: getCurrentTimeWithSeconds(),
        lastSignIn: getCurrentTimeWithSeconds(),
    });
    return USERS;
};

const getFullEventList = () => {
    return EVENTS;
};
const getEventDetails = (id) => {
    return EVENTS.find((event) => event.id === parseInt(id));
};
const addAnEvent = (body) => {
    const verdict = "Event added successfully!";
    EVENTS.push({
        id: EVENTS.length + 1,
        name: body.name,
        description: body.description,
        eventTime: body.eventTime,
        eventCreated: getCurrentTimeWithSeconds(),
    });
    return verdict;
}



module.exports = {
    getCurrentTimeWithSeconds,
    isAdmin,
    getPanelList,
    createUsers,
    getFullPositionList,
    getFullEventList,
    getFullPanelList,
    getTransactionList,
    getBalanceOfEachPanelMember,
    getFullTransascionList,
    addATransaction,
    updateATransaction,
    addAnEvent,
    getEventDetails 
};