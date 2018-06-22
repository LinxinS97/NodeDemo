const Koa = require('koa');
const _ = require('koa-route');

const app = new Koa();

app.use(async (ctx, next) => {
    // 打印url
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    // 调用下一个middleware
    await next();
});

const about = (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = '<a href="/">Index Page</a>'
};

const main = ctx => {
    ctx.body = 'Hello World';
};

const greeting = (ctx, name) => {
    ctx.body = `Hello, ${name}!`;
};

app.use(_.get('/', main));
app.use(_.get('/about', about));
app.use(_.get('/:name', greeting));

app.listen(8000);
console.log('app started at port 8000...');