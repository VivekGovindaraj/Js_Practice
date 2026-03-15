    import React, {useEffect, useState}from 'react'
    import { useGetproductDetailsQuery } from '../redux/api/productsAPI'
    import {useParams} from 'react-router-dom'
    import toast from "react-hot-toast";
    import StarRating from '../components/StarRating';


    const ProductDetails = () => {

        const params = useParams();

        const [quantity,setQuantity] = useState(1)


        const{data,isLoading,error, isError} = useGetproductDetailsQuery(params.id);

        const product = data?.product

        useEffect(() => {
        
                if(isError){
                toast.error(error?.data?.message)
                }
            }, [isError, error])
        
            if(isLoading){
                return ( <h5>Loading...</h5>)
            }

        return (
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 mt-5">
                    <div className='p-3'>
                        <img src={product?.images?.[0]?.url} alt="productImage" id="mainProductImage" className="d-block w-100" />
                    </div>
                </div>
                <div className="col-12 col-lg-5 mt-5">
                    <h3>{product?.name}</h3>
                    <p id="product_id">{product?._id}</p>

                    <div className='rating mt-auto d-flex align-items-center'>
                    <StarRating starRatedColor="blue" numberOfStars={5} name='string'
                    rating ={product?.ratings}  reviews={product?.noOfReviews}
                    
                    />
                        
                    
                    </div>

                    
                <hr/>
                 <p id="product_price">{product.price}</p>
                <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" >-</span>
                {/* <input
                type="number"
                className="form-control count d-inline"
                value={quantity}
                /> */}
                1
                <span className="btn btn-primary plus">+</span>
                </div>
                <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ms-4"
                >
                Add to Cart
                </button>

                 <hr />


                    <p>
                    Status: <span id="stock_status" className={product.stock > 0 ? "greenColor" : "redColor"}>
                        {product.stock > 0 ? "In Stock" : "Out of stock"}
                    </span>
                    </p>



                    <h4 className="mt-2">Description:</h4>
                    <p>
                    {product.description}
                    </p>
                    <hr />
                    <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

                </div>

            </div>

         
           
        )
    }

    export default ProductDetails