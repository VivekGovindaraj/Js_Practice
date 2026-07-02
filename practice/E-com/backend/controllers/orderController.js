import Order from "../models/Order.js";
import User from "../models/User.js";

// create new order
// api  post   /api/order

export const createOrder = async(req, res) => {

      try{

        const {
          
            orderItems,
            shippingInfo,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxAmount,
            shippingAmount,
            totalAmount,
        } = req.body;

        const order = new Order({
            user:req.user._id,
           orderItems,
            shippingInfo,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxAmount,
            shippingAmount,
            totalAmount,
        })
       
        if(orderItems && orderItems.length === 0){
            res.status(400).json({
                messsage:"No Order Items"
            })
        }
        const createOrder = await order.save()

        if(createOrder){
            res.status(201).json({
                success:true,
                message:"Order Created Succesfully",
                createdOrder:createOrder
            })
        }

    }catch(error){
        res.status(500).json({
            message:error.message
        })
      
    }
}