import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { products } from './data/product.js';


dotenv.config();

const app = express();

// Middleware
app.use(cors()) // allow frontend

app.use(express.json()) // prase JSON bodies  

// health

app.get('/', (req, res) => {
    res.json({
        ok:true,
        service:"e-commerce-api"
    })
})



//  Product list
 app.use( '/api/products', (req, res) => {
    res.json(products)
 })

 //product details

 app.get('api/products/:id', (req, res) => {
    const item = products.find( p => p._id = req.params.id);

    if(!item) return res.status(404).json({mesaage: "Product Not found"})

        res.json(item)
 })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running - ${PORT}`)
})