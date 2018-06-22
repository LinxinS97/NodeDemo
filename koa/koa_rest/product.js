const nextId = (function () {
   let id = 0;
   return function() {
       return id++;
   }
})()

function Product(name, manufacturer, price) {
    this.id = nextId();
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
}

const products = [
    new Product('iPhone 8', 'Apple', 6800),
    new Product('ThinkPad T440', 'Lenovo', 5999),
    new Product('LBP2900', 'Canon', 1099)
];

module.exports = {
    getProducts() {
        return products;
    },

    getProduct(id) {
        for(let i = 0; i < products.length; i++) {
            if(products[i].id == id) {
                return products[i];
            }
        }
        return null;
    },

    deleteProduct(id) {
        for(let i = 0; i < products.length; i++) {
            if(products[i].id === id) {
                return products.splice(i, 1)[0];
            }
        }
        return null;
    }
}