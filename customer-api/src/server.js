import express from 'express';
import cors from 'cors';

import customerList from './models/CustomerList.js';

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use( express.json() );
  
app.post('/customer', (req, res) => {
  const customer = req.body;
  const customers = customerList.add(customer);
  res.status(200).json(customers);
});
  
app.get('/', (req, res) => {
  res.status(200).json(customerList);
});

app.put('/customer/:customerId', (req, res) => {
  const customerId = req.params.customerId;
  const { customer } = req.body;
  const customers = customerList.update(customerId, customer);
  res.status(200).json(customers);
});

app.delete('/customer/:customerId', (req, res) => {
  const customerId = req.params.customerId;
  const customers = customerList.remove(customerId);
  res.status(200).json(customers);
});

app.listen(PORT, () => {
    console.log(`Accounting Server is running on port ${PORT}`);
});