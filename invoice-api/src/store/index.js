import { LocalStorage } from "node-localstorage";

if ( !global.localStorage ) {
    global.localStorage = new LocalStorage('./data/DB');
}

const INVOICE_LIST_KEY = 'invoice-list-db';

const store = {
    get: () => {
        return JSON.parse(localStorage.getItem(INVOICE_LIST_KEY)) || [];
    },
    set: (invoice) => {
        const invoices = store.get();
        invoices.push(invoice);
        localStorage.setItem(INVOICE_LIST_KEY, JSON.stringify(invoices));
        
        return store.get();
    },
    find: (key) => {
        const invoices = store.get();
        return invoices.filter(({invoiceId}) => invoiceId === key);
    },
    findOne: (key) => {
        const cList = store.find(key);
        return cList.length ? cList[0] : null;
    },
    update: (key, invoice) => {
        const invoices = store.get();
        const updatedInvoices= invoices.map(cust => cust.invoiceId === key ? {...cust, ...invoice} : cust);
        console.log('updatedInvoices', updatedInvoices);
        localStorage.setItem(INVOICE_LIST_KEY, JSON.stringify(updatedInvoices));
        
        return store.get();
    },
    remove: (key) => {
        const invoices = store.get();        
        const filterinvoices = invoices.filter(({invoiceId}) => invoiceId !== key);
        localStorage.setItem(INVOICE_LIST_KEY, JSON.stringify(filterinvoices));
        return store.get();
    },
    clear: () => {
        localStorage.clear();
        return true;
    }
};

export default store;
