const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/routes');
const dotEnv = require('dotenv');
const initDB = require('./utils/database'); 
initDB(); 
dotEnv.config();
const app = new Koa();
app.use(bodyParser());

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 8080');
});
