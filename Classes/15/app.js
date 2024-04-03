const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const validatorJs = require('validatorjs');


const app = new Koa();
app.use(bodyParser());

app.use((ctx, next) => {

    console.log('Middleware 1');
    console.log('Request body:', ctx.request.body);

    if (!ctx.request.is('application/json')) {

        ctx.response.status = 400;
        ctx.body = {message: 'Bad Request'};
        console.log('Status set to 400');
        return;

    }


    const rules = {
        name: 'required|string',
    };

    const validation = new validatorJs(ctx.request.body, rules);

    if (validation.fails()) {
        ctx.response.status = 400;
        ctx.body = {
            message: 'Bad Request',
            errors: validation.errors.all(),
        };
        console.log('Status set to 400');
        return;
    }
    next();
});

app.use((ctx, next) => {

    ctx.response.status = 200;

    ctx.body = {
        message: 'Hello, ' + ctx.request.body.name + '!',
    };
    console.log('Status set to 200');

});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
