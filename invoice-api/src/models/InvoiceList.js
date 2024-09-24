import store from "../store/index.js";
import Invoice from "./Invoice.js";

class InvoiceList {
    constructor () {
        this.invoiceList = store.get();
    }

    add(invoice) {
        console.log('invoice', invoice);
        if (invoice) {
            const newinvoice = new Invoice(invoice);
            console.log('newinvoice', newinvoice);
            this.invoiceList = store.set(newinvoice);
            return this.invoiceList;
        } else {
            throw new Error(`Error: Invalid invoice data.`)
        }
    }

    update(invoiceId, invoice) {
        if (store.findOne(invoiceId)) {
            this.invoiceList = store.update(invoiceId, invoice);
            return this.invoiceList;
        } else {
            throw new Error(`Error: invoice ${invoiceId} not exists.`)
        }
    }

    get() {
        return this.invoiceList;
    }

    remove(invoiceId) {
        console.log('remove', store.findOne(invoiceId));
        if (store.findOne(invoiceId)) {
            this.invoiceList = store.remove(invoiceId);
            console.log(this.invoiceList);
            return this.invoiceList;
        } else {
            throw new Error(`Error: invoice ${invoiceId} not exists.`)
        }
    }
}

const invoiceList = new InvoiceList();
export default invoiceList;