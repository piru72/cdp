const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');

const app = new Koa();
app.use(bodyParser());

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
