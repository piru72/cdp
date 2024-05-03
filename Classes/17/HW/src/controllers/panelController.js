const validatorJs = require('validatorjs');
const { getFullPanelList, getPanelList,getFullPositionList, getBalanceOfEachPanelMember } = require('../services/panelService.js');
const { responseSummary  } = require('../constants/response.js');

const getAllPanelMembers = async (ctx) => {
    ctx.body = {
        responseSummary: responseSummary.LIST_OF_ALL_PANEL_MEMBERS,
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
            responseSummary: responseSummary.VALIDATION_FAILED,
            errors: validation.errors.all(),
        };
        return;
    }
    ctx.body = {
        responseSummary: responseSummary.DETAILS_OF_A_SPECIFIC_PANEL_MEMBER,
        panelMembers: getPanelList(ctx.params.id),
    };
    ctx.set('Content-Type', 'application/json');
};

const getAllPositions = async (ctx) => {
    ctx.body = {
        responseSummary: responseSummary.LIST_OF_ALL_POSITIONS,
        positions: getFullPositionList(),
    };
    ctx.set('Content-Type', 'application/json');
};

const getPanelMembersBalance = async (ctx) => {
    ctx.body = {
        responseSummary: responseSummary.LIST_OF_ALL_PANEL_MEMBERS_BALANCE,
        panelMembers: getBalanceOfEachPanelMember(ctx.params.id),
    };
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
};

module.exports = { getAllPanelMembers, getPanelMembersById, getAllPositions, getPanelMembersBalance };
