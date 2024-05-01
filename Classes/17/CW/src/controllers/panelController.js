const validatorJs = require('validatorjs');
const { getFullPanelList, getPanelList,getFullPositionList, getBalanceOfEachPanelMember } = require('../services/panelService.js');

const getAllPanelMembers = async (ctx) => {
    ctx.body = {
        responseSummary: 'List of all panel members',
        panelMembers: getFullPanelList(),
    };
    ctx.set('Content-Type', 'application/json');
};

const getPanelMembersById = async (ctx) => {
    const rules = {
        id: 'required|string',
    };
    const validation = new validatorJs(ctx.params, rules);
    if (validation.fails()) {
        ctx.status = 400;
        ctx.body = {
            responseSummary: 'Validation failed',
            errors: validation.errors.all(),
        };
        return;
    }
    ctx.body = {
        responseSummary: 'List of all panel members',
        panelMembers: getPanelList(ctx.params.id),
    };
    ctx.set('Content-Type', 'application/json');
};

const getAllPositions = async (ctx) => {
    ctx.body = {
        responseSummary: 'List of all positions',
        positions: getFullPositionList(),
    };
    ctx.set('Content-Type', 'application/json');
};

const getPanelMembersBalance = async (ctx) => {
    ctx.body = {
        responseSummary: 'List of all panel members balance',
        panelMembers: getBalanceOfEachPanelMember(ctx.params.id),
    };
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
};

module.exports = { getAllPanelMembers, getPanelMembersById, getAllPositions, getPanelMembersBalance };
