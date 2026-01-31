import Product from "../models/product.js";

// get /api/v1/products
export const getProducts = async(req,res) => {

    let products = await Product.find();

    res.status(200).json({
        products
    })
}

// get  admin create new procuts /api/v1/admin/newProducts

export const newProducts = async (req,res) => {

    let newProduct = await Product.create(req.body);

    res.status(201).json({
        newProduct
    })
}