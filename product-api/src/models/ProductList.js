import store from "../store/index.js";
import Product from "./Product.js";

class ProductList {
    constructor () {
        this.productList = store.get();
    }

    add(product) {
        console.log(product);
        if (product) {
            const newProduct = new Product(product);
            console.log('newProduct', newProduct);
            this.productList = store.set(newProduct);
            return this.productList;
        } else {
            throw new Error(`Error: Invalid Product data.`)
        }
    }

    update(productId, product) {
        if (store.findOne(productId)) {
            this.productList = store.update(productId, product);
            return this.productList;
        } else {
            throw new Error(`Error: Product ${productId} not exists.`)
        }
    }

    get() {
        return this.productList;
    }

    remove(productId) {
        console.log('remove', store.findOne(productId));
        if (store.findOne(productId)) {
            this.productList = store.remove(productId);
            console.log(this.productList);
            return this.productList;
        } else {
            throw new Error(`Error: Product ${productId} not exists.`)
        }
    }
}

const productList = new ProductList();
export default productList;