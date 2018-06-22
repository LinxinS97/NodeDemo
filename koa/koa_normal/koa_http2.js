const Koa = require('koa');
const _ = require('koa-route');

const app = new Koa();

const db = {
    tobi: { name: 'tobi', species: 'ferret' },
    loki: { name: 'loki', species: 'ferret' },
    jane: { name: 'jane', species: 'ferret' }
}

const pets = {
    list(ctx) {
        let names = Object.keys(db);
        ctx.body = 'pets: ' + names.join(', ');
    },
    show(ctx, name) {
        let pet = db[name];
        if(!pet) return ctx.throw('404: cannot find that pet', 404);
        ctx.body = pet.name + ' is a ' + pet.species;
    }
}

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

app.listen(8000);
console.log('app started at port 8000...');