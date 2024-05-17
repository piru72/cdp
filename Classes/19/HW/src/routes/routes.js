const Router = require('koa-router');
const { getCurrentTimeWithSeconds } = require('../utils/utils.js');


const eventRoutes = require('./event.js');

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
    { prefix: '/events', routes: eventRoutes },
];

// Mount routes onto the main router
routeSets.forEach(({ prefix, routes }) => {
    router.use(prefix, routes.routes(), routes.allowedMethods());
});



module.exports = router;