const Koa = require('koa');
const _ = require('koa-route');
let app = new Koa();

const main = async ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

app.use(_.get('/', main));

app.listen(8000);
console.log('server is running at http://localhost:8000');