import { LocalStorage } from "node-localstorage";

if ( !global.localStorage ) {
    global.localStorage = new LocalStorage('./data/DB');
}

const CUSTOMER_LIST_KEY = 'customer-list-db';

const store = {
    get: () => {
        return JSON.parse(localStorage.getItem(CUSTOMER_LIST_KEY)) || [];
    },
    set: (customer) => {
        const customers = store.get();
        customers.push(customer);
        localStorage.setItem(CUSTOMER_LIST_KEY, JSON.stringify(customers));
        
        return store.get();
    },
    find: (key) => {
        const customers = store.get();
        return customers.filter(({customerId}) => customerId === key);
    },
    findOne: (key) => {
        const cList = store.find(key);
        return cList.length ? cList[0] : null;
    },
    update: (key, customer) => {
        const customers = store.get();
        const updatedCustomers = customers.map(cust => cust.customerId === key ? {...cust, ...customer} : cust);
        console.log('updatedCustomers', updatedCustomers);
        localStorage.setItem(CUSTOMER_LIST_KEY, JSON.stringify(updatedCustomers));
        
        return store.get();
    },
    remove: (key) => {
        const customers = store.get();        
        const filtercustomers = customers.filter(({customerId}) => customerId !== key);
        localStorage.setItem(CUSTOMER_LIST_KEY, JSON.stringify(filtercustomers));
        return store.get();
    },
    clear: () => {
        localStorage.clear();
        return true;
    }
};

export default store;
