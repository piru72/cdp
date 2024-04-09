const Router = require('koa-router');
const { getCurrentTimeWithSeconds } = require('./utils.js');

const transactionRoutes = require('./routesTransactions.js');
const eventRoutes = require('./routesEvents.js');
const panelRoutes = require('./routesPanel.js');

const router = new Router();


router.get('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        message: 'Welcome to PICCO Backend API!',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
});

// Define route sets as an array
const routeSets = [
    { prefix: '/transactions', routes: transactionRoutes },
    { prefix: '/events', routes: eventRoutes },
    { prefix: '/panel', routes: panelRoutes }
];

// Mount routes onto the main router
routeSets.forEach(({ prefix, routes }) => {
    router.use(prefix, routes.routes(), routes.allowedMethods());
});



module.exports = router;