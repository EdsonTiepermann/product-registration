import express from 'express';
import "dotenv/config";
import productsRouter from './routes/product-registration-router.js';

const app = express();
app.use(express.json());

app.use('/products', productsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
