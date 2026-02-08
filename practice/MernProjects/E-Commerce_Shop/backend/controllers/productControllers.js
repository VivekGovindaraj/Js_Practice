import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../middleware/asyncHandler.js";
import APIFilters from "../utils/apiFilters.js";

// get /api/v1/products
export const getProducts = async(req,res) => {


    // let products = await Product.find();

    let apiFilters = new APIFilters(Product, req.query).search();
    let products = await apiFilters.query;



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


// get single products by id /api/v1/products/:id

export const getProductDetails= asyncHandler( async (req,res, next) => {

    let getProduct = await Product.findById(req.params.id)

    if(!getProduct) {
        return next(new ErrorHandler("Product Not Found", 404))
    }

    res.status(200).json({
     getProduct
    })
});

// Update product by id  /api/v1/admin/products/:id

export const updateProduct = async(req,res) => {

    let product = await Product.findById(req.params.id)

    if(!product) console.log(`Product not found`)

     product =  await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true
     })

     res.status(200).json({
        product
     })

}

// Delete  /api/v1/product/:id

export const deleteProduct = async(req,res) => {

    let product = await Product.findById(req.params.id)

    if(!product) console.log(`Product not found`)

    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message:`Product deleted Succesfully`,
        product
    })

  
}