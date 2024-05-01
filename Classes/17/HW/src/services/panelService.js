
const {
    POSITIONS,
    PANEL_DATA,
    TRANSACTIONS
} = require('../data');


const getFullPositionList = () => {
    return POSITIONS;
};

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

module.exports = {
    getFullPositionList,
    getPanelList,
    getFullPanelList,
    getBalanceOfEachPanelMember
};