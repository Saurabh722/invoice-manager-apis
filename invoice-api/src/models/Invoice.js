import uniqid from 'uniqid';

export default class Invoice {
    constructor (invoice) {
        console.log('invoice - ', invoice);
        this.invoiceId = uniqid();
        this.customerId = invoice.customerId;
        this.customerName = invoice.customerName;
        this.OrderTimeStamp = Date.now()/1000;
        this.DeliveryTimeStamp = this.OrderTimeStamp + (3 * 24 * 60 * 60); // + 3 days
        this.status = invoice.status;
        this.items = invoice.items || [];
        this.amount = invoice.amount;
    }
}