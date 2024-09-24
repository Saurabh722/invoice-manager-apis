import uniqid from 'uniqid';

export default class Customer {
    constructor (customer) {
        this.customerId = uniqid();
        this.name = customer.name;
        this.email = customer.email;
        this.phone = customer.phone;
        this.zip = customer.zip;
    }
}