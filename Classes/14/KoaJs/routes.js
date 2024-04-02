const Router = require('koa-router');
const { getCurrentTimeWithSeconds, isAdmin, getFullUserList, createUsers } = require('./utils.js');
const userRoutes = require('./routesUser.js');
const router = new Router();

let welcomeMessage = 'Welcome to EcoSync / API!';
router.get('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    ctx.body = {
        message: welcomeMessage,
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
});



router.use('/users', userRoutes.routes(), userRoutes.allowedMethods());



module.exports = router;