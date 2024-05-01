const Router = require('koa-router');
const { getCurrentTimeWithSeconds } = require('../services/utils.js');

const transactionRoutes = require('./transactionRoutes.js');
const eventRoutes = require('./eventRoutes.js');
const panelRoutes = require('./panelRoutes');
const academisSessionRoutes = require('./academicSessionRoutes');

// Create a new router instance
const router = new Router();


// Root of the API
router.get('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        message: 'Welcome to PICCO Backend API!',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
});

// Define route sets as an array along with their prefixes and routes
const routeSets = [
    { prefix: '/transactions', routes: transactionRoutes },
    { prefix: '/events', routes: eventRoutes },
    { prefix: '/panel', routes: panelRoutes },
    { prefix: '/academicSessions', routes: academisSessionRoutes },
];

// Mount routes onto the main router
routeSets.forEach(({ prefix, routes }) => {
    router.use(prefix, routes.routes(), routes.allowedMethods());
});



module.exports = router;