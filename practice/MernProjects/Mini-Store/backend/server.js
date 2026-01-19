

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { products } from './data/products.js';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';


// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ ok: true, success: "Mini-Store" });
});

// get products from products.js


app.use('/api/products' , productRoutes);

// app.get('/api/products', (req,res) => {
//     res.json(products)
// })

// get products based on the product id

// app.get('/api/products/:id' , (req,res) => {
//     let item = products.find((product) => product._id === req.params.id)
//     if(!item) return res.status(404).json({
//         message:'product not found'
//     })

//     res.json(item)
// })



// Start server
const PORT = process.env.PORT || 4000;

async function start() {
     await connectDB(process.env.MONGODB_URI);

     app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    
}

start();


 