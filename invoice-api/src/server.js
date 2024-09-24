import express from 'express';
import cors from 'cors';

import invoiceList from './models/InvoiceList.js';

const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());
app.use( express.json() );
  
app.post('/invoice', (req, res) => {
  const invoice = req.body;
  const invoices = invoiceList.add(invoice);
  res.status(200).json(invoices);
});
  
app.get('/', (req, res) => {
  res.status(200).json(invoiceList);
});

app.put('/invoice/:invoiceId', (req, res) => {
  const invoiceId = req.params.invoiceId;
  const { invoice } = req.body;
  const invoices = invoiceList.update(invoiceId, invoice);
  res.status(200).json(invoices);
});

app.delete('/invoice/:invoiceId', (req, res) => {
  const invoiceId = req.params.invoiceId;
  const invoices = invoiceList.remove(invoiceId);
  res.status(200).json(invoices);
});

app.listen(PORT, () => {
    console.log(`Accounting Server is running on port ${PORT}`);
});