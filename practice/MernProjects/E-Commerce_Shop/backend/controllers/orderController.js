import Order from '../models/order.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/product.js';
import ErrorHandler from '../utils/errorHandler.js';

// create new order 

export const  newOrder = asyncHandler( async(req,res,next) => {

    const {
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount
  } = req.body;

           const order = await Order.create({
             shippingInfo,
             orderItems,
             paymentMethod,
             paymentInfo,
             itemsPrice,
             taxAmount,
             shippingAmount,
             totalAmount,
             user: req.user._id
           });
         

         res.status(201).json({
            success:true,
            order
         })

})

// get Order details  api/orders/:id

export const getOrderDetails = asyncHandler(async(req,res,next) => {

   const order = await Order.findById(req.params.id)

   if(!order){
    
      return next(new ErrorHanlder(`Your order not found with ${req.params.id}`), 404)
   }

   res.status(200).json({
      order
   })
})

// get current user order  api/v1/order/:id

export const  myOrder = asyncHandler( async(req,res,next) => {

   const  orders = await Order.find({user:req.user._id})

   res.status(200).json({
      orders
   })
})

// get All orders by admin api/v1/admin/orders

export const allOrders = asyncHandler(async(req,res,next) => {

   const orders = await Order.find()

  
   
})

// update order  by admin  /api/v1/admin/orders/:ID

export const updateOrders = asyncHandler(async(req,res,next) => {


   const order = await Order.findById(req.params.id)

   if(!order){
      return next(new ErrorHandler('No order found with this ID', 404))
   }

   if(order.orderStatus == "Delivered"){
      return next(new ErrorHandler('Your order already "Delivered" you cant upate', 400))
   }

   order?.orderItems?.forEach(async (item) => {

      const product = await Product.findById(item?.product?.toString())

      if(!product) {
         return next(new ErrorHandler("No prdocut found with this id", 404))
      }

      product.stock = product.stock - item.quantity

      await product.save();

   })

   order.orderStatus = req.body.status;
   order.deliveredAt = Date.now();

    res.status(200).json({
      order
   })
})


// delete order api/v1/admin/order

export const deleteOrder = asyncHandler(async(req,res,next) => {
  
   const order = await Order.findById(req.params.id)

   if(!order){
      return next(new ErrorHandler('No order founnd on this ID', 404))

   }

   await order.deleteOne();

   res.status(200).json({
      success:true,
      message: 'order deleted Succesfully'
   })
})
