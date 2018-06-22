const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');

let app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 解析request body
app.use(bodyParser());

// 添加rest解析中间件
app.use(rest.restify());

// 解析controllers
app.use(controller());

app.listen(8000);
console.log('server is running at http://localhost:8000');