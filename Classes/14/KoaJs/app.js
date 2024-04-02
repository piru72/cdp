const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { getCurrentTimeWithSeconds, isAdmin, getFullUserList, createUsers } = require('./utils.js');

const app = new Koa();



app.use(bodyParser());

let requestInboundTime = '';
// GET /
app.use((ctx, next) => {
    requestInboundTime = getCurrentTimeWithSeconds();
    
    if (ctx.url === '/') {
        const welcomeMessage = 'Welcome to EcoSync / API!';
        ctx.body = {
            message: welcomeMessage,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 200;
        return;
    }

    return next();

});


// GET /users
app.use((ctx, next) => {
    
    if (ctx.url === '/users' && ctx.method === 'GET') {
        const welcomeMessage = 'Welcome to EcoSync GET /users API!';

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

        }

        ctx.status = 200;
        return;

    }

    return next();

})

// POST /users

app.use((ctx, next) => {

    if (ctx.url === '/users' && ctx.method === 'POST') {
        const welcomeMessage = 'Welcome to EcoSync POST /users API!';

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

        }

        ctx.status = 200;
        return;

    }

    return next();

});

app.use((ctx, next) => {
    if (ctx.url === '/forloop') {
        let value = 0;
        for (let i = 0; i < 10000000000; i++) {
            value += i;
        }


        ctx.body = {
            message: 'For loop completed',
            requestInboundTime: requestInboundTime,
            value: value,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
    }

    return next();

})

app.use((ctx) => {
    ctx.body = {
        message: 'Page not found',
        requestInboundTime: requestInboundTime,
        value: value,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    ctx.status = 404;
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
