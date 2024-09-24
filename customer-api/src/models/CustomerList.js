import store from "../store/index.js";
import Customer from "./Customer.js";

class CustomerList {
    constructor () {
        this.customerList = store.get();
    }

    add(customer) {
        console.log('customer', customer);
        if (customer) {
            const newcustomer = new Customer(customer);
            console.log('newcustomer', newcustomer);
            this.customerList = store.set(newcustomer);
            return this.customerList;
        } else {
            throw new Error(`Error: Invalid customer data.`)
        }
    }

    update(customerId, customer) {
        if (store.findOne(customerId)) {
            this.customerList = store.update(customerId, customer);
            return this.customerList;
        } else {
            throw new Error(`Error: customer ${customerId} not exists.`)
        }
    }

    get() {
        return this.customerList;
    }

    remove(customerId) {
        console.log('remove', store.findOne(customerId));
        if (store.findOne(customerId)) {
            this.customerList = store.remove(customerId);
            console.log(this.customerList);
            return this.customerList;
        } else {
            throw new Error(`Error: customer ${customerId} not exists.`)
        }
    }
}

const customerList = new CustomerList();
export default customerList;