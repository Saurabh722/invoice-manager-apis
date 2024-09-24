import uniqid from 'uniqid';

export default class Product {
    constructor (product) {
        this.productId = uniqid();
        this.name = product.name;
        this.category = product.category;
        this.price = product.price;
        this.quantity = product.quantity;
        
    }
}