const Router = require('koa-router');
const { getCurrentTimeWithSeconds, isAdmin, getFullUserList, createUsers } = require('./utils'); // Adjust path as necessary

const router = new Router();

// GET /users
router.get('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    welcomeMessage = 'Welcome to EcoSync GET /users API!';

    if (isAdmin(ctx.request.body)) {
        ctx.body = {
            response: getFullUserList(),
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };

    }
    else {
        ctx.body = {
            response: 'Access Denied',
            message: welcomeMessage,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 403;

    }

    ctx.status = 200;
    return;
});

// POST /users
router.post('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    welcomeMessage = 'Welcome to EcoSync POST /users API!';

    if (isAdmin(ctx.request.body)) {
        ctx.body = {
            response: createUsers(ctx.request.body),
            message: welcomeMessage,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };

    }
    else {
        ctx.body = {
            response: 'Access Denied',
            message: welcomeMessage,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 403;

    }

    ctx.status = 200;
    return;
});

module.exports = router;
