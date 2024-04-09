
const Router = require('koa-router');
const validatorJs = require('validatorjs');
const {
    getFullPanelList,
    getFullPositionList,
    getPanelList,
    getBalanceOfEachPanelMember } = require('./utils.js');

const { verifyTokenAndRole } = require('./auth.js');
const router = new Router();
router.use(verifyTokenAndRole('admin'));
router.get('/members', (ctx) => {

    ctx.body = {
        responseSummary: 'List of all panel members',
        panelMembers: getFullPanelList(),
    };
    ctx.set('Content-Type', 'application/json');

});

router.get('/members/:id', (ctx) => {
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

});

router.get('/positions', (ctx) => {

    ctx.body = {
        responseSummary: 'List of all positions',
        positions: getFullPositionList(),
    };
    ctx.set('Content-Type', 'application/json');

});

router.get('/balance/:id', (ctx) => {

    ctx.body = {
        responseSummary: 'List of all panel members balance',
        panelMembers: getBalanceOfEachPanelMember(ctx.params.id),
    };
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;


});


module.exports = router;