const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const a = 10;
const b = 20;
let result = 0;
app.use(bodyParser());
app.use(async (ctx, next) => {
    console.log('a:', a);
    console.log('b:', b);
    result = a + b;
    await next();
});

let requestInboundTime = '';

const getCurrentTimeWithSeconds = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};
app.use((ctx, next) => {
    requestInboundTime = getCurrentTimeWithSeconds();
    // This is the base URL
    if (ctx.url === '/') {
        const welcomeMessage = 'Welcome to EcoSync API!';
        ctx.body = {
            message: welcomeMessage,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 200;
    }
    return next();

});

app.use((ctx, next) => {
    
    if (ctx.url === '/users') {
        ctx.body = {
            calculation: { a, b, result },
            method: ctx.method,
            url: ctx.url,
            status: ctx.status,
            requestBody: ctx.request.body,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        };
        ctx.status = 200;

    }


    return next();





})

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
