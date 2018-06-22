const Koa = require('koa');
const _ = require('koa-route');
let app = new Koa();

const main = async (ctx, next) => {
    // 抛出错误
    // ctx.throw(404);

    // 和直接抛出404一样
    // ctx.response.status = 404;
    // ctx.response.body = 'Page Not Found';

    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        };
        // 被try…catch捕获不会触发error事件，此时必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。
        ctx.app.emit('error', err, ctx)
    }
}

app.use(_.get('/', main));

app.on('error', (err, ctx) =>{
    console.error('server error', err);
});

app.listen(8000);
console.log('server is running at http://localhost:8000')