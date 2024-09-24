import express from 'express';
import cors from 'cors';

import productList from './models/ProductList.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use( express.json() );
  
app.post('/product', (req, res) => {
  console.log('req.body.post', req.body)
  const products = productList.add(req.body);
  res.status(200).json(products);
});
  
app.get('/', (req, res) => {
  res.status(200).json(productList);
});

app.put('/product/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = req.body;
  console.log('put.req.body', req.body);
  const products = productList.update(productId, product);
  res.status(200).json(products);
});

app.delete('/product/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log('req.body', req.body);
  const products = productList.remove(productId);
  res.status(200).json(products);
});


app.listen(PORT, () => {
    console.log(`Accounting Server is running on port ${PORT}`);
});