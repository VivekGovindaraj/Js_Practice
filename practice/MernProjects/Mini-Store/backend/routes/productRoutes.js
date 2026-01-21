import {Router} from 'express'
import { Product } from '../models/Product.js'
// import { products } from '../data/products

const router = Router();

// get all products

router.get('/', async (req,res) => {

    let item =await Product.find({})

    res.status(400).json(item)
})


// get product by id

router.get('/:id' , async (req,res) => {
    try{

        let item = await Product.findById(req.params.id)

        if(!item) return res.status(404).json({
            message:"Product Not found"
        })

        res.json(item)
    }catch(error){
        res.status(400).json({
            message:"Invalid Product"
        })
    }
})



export default router;