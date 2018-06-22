const Koa = require('koa');
const Pets = require('./seq');
const _ = require('koa-route');
let app = new Koa();

const main = async ctx => {
    let dog = await Pets.create({
        id: 'g-' + Date.now(),
        name: 'aaa',
        birth: '2007-07-07',
    });
    console.log('created:' + JSON.stringify(dog));
    let pets = await Pets.findAll({
        where: {
            name: 'aaa'
        }
    })
    console.log(`find ${pets.length} pets`);
    ctx.response.body = {
        ...pets
    }
}

app.use(_.get('/', main));
app.listen(8000);
console.log('server is running at http://localhost:8000');