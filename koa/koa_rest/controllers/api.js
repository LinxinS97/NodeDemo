const products = require('../product');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts()
        });
    },

    'GET /api/product/:id': async (ctx, next) => {
        ctx.rest({
            products: products.getProduct(ctx.params.id)
        });
    },

    'POST /api/products': async (ctx, next) => {
        let p = products.createProduct(ctx.body.name, ctx.body.manufacturer, parseFloat(ctx.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products': async (ctx, next) => {
        console.log(`delete product ${ ctx.params.id }`);
        let p = products.deleteProduct(ctx.params.id);
        if(p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_founproduct:not_found', 'product not found by id');
        }
    }
};