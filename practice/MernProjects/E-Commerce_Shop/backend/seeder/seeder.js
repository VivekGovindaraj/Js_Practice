import express from "express";
import dotenv from 'dotenv';
import Product from "../models/product.js";
import mongoose from "mongoose";
import products from "../seeder/data.js";


dotenv.config({
    path:"./backend/config/.env"
})

const seedProducts = async (req,res) => {

    try{

        let connectDB = await mongoose.connect(process.env.DB_URI)

        // Delete exist products
        await Product.deleteMany();

        console.log('Seeder deleted exist products')

        // Insert new Product
        await  Product.insertMany(products)

        console.log('Seeder Inserted New products')



    }catch(error){
        console.log(`Error Message : ${error.message}  ❌`)
    }
}


seedProducts()