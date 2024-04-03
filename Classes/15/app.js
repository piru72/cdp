const Koa = require('koa');
const bodyParser = require('koa-bodyparser');


const app = new Koa();
app.use(bodyParser());

app.use((ctx, next) => {

    console.log('Middleware 1');
    console.log('Request body:', ctx.request.body);


    if (ctx.request.is('json') === false) {
        ctx.response.status = 402;
        ctx.body = 'Invalid request. Content-Type is not application/json';
        console.log('Status set to 400');
        return;
    }

    if (ctx.request.body.name === undefined ) {
        ctx.response.status = 401;
        console.log('Status set to 400');
        ctx.body = 'Invalid request. Name is missing';
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
