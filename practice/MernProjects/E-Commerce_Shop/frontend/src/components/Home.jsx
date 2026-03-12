import React, {useEffect} from 'react';
import { useGetproductsQuery } from '../redux/api/productsAPI';
import ProductItem from './product/ProductItem';
import toast from "react-hot-toast";

const Home = () => {

    const {data,isLoading, error, isError} = useGetproductsQuery();

    useEffect(() => {

        if(isError){
           toast.error(error?.data?.message)
        }
    })

    if(isLoading){
        return ( <h5>Loading...</h5>)
    }
  return (
    <div className='container'>
        <div className='row row-gap-2'> 
            <div className="col-md-12 col-sm-6 col-12 col-auto">
                <h2  id="products_heading" className='text-secondary'>Latest Product</h2>

                <section id="products" className='mt-3'>

                    <div className='row '>
                       {
                        data?.products?.map((product) => (
                            <ProductItem key={product._id} product={product}/>
                        ))
                       }
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Home