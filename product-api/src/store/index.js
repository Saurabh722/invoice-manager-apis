import { LocalStorage } from "node-localstorage";

if ( !global.localStorage ) {
    global.localStorage = new LocalStorage('./data/DB');
}

const PRODUCT_LIST_KEY = 'product-list-db';

const store = {
    get: () => {
        return JSON.parse(localStorage.getItem(PRODUCT_LIST_KEY)) || [];
    },
    set: (product) => {
        const products = store.get();
        products.push(product);
        localStorage.setItem(PRODUCT_LIST_KEY, JSON.stringify(products));
        
        return store.get();
    },
    find: (key) => {
        const products = store.get();
        return products.filter(({productId}) => productId === key);
    },
    findOne: (key) => {
        console.log('findOne', key);
        const pList = store.find(key);
        console.log('pList', pList);
        return pList.length ? pList[0] : null;
    },
    update: (key, product) => {
        console.log('update', product);
        const products = store.get();
        const updatedProducts = products.map(prod => prod.productId === key ? {...prod, ...product} : prod);
        console.log('updatedProducts', updatedProducts);
        localStorage.setItem(PRODUCT_LIST_KEY, JSON.stringify(updatedProducts));
        
        return store.get();
    },
    remove: (key) => {
        const products = store.get();        
        const filterProducts = products.filter(({productId}) => productId !== key);
        localStorage.setItem(PRODUCT_LIST_KEY, JSON.stringify(filterProducts));
        console.log('store.get()', store.get());
        return store.get();
    },
    clear: () => {
        localStorage.clear();
        return true;
    }
};

export default store;
