import React from 'react'
import productImage from '../assets/images/default_product.png'
import { useGetproductsQuery } from '../redux/api/productsAPI'

const Home = () => {

    const {data,isLoading, error} = useGetproductsQuery();
  return (
    <div className='container'>
        <div className='row row-gap-2'> 
            <div className="col-md-12 col-sm-6 col-12 col-auto">
                <h2  id="products_heading" className='text-secondary'>Latest Product</h2>

                <section id="products" className='mt-5'>

                    <div className='row '>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='card p-3 rounded'>
                                <img src={productImage} alt="productImg" className='card-img-top' /> 
                                
                                <div className="card-body px-2 d-flex justify-content-center  flex-column">
                                    <h5 className='card-title'>
                                        <a href="#">Product 1</a>
                                    </h5>

                                    <div className='rating mt-auto d-flex align-items-center'>
                                        <div className='star-ratings'>
                                            <i className='fa fa-star star-active'></i>
                                            <i className='fa fa-star star-active'></i>
                                            <i className='fa fa-star star-active'></i>
                                            <i className='fa fa-star star-active'></i>
                                            <i className='fa fa-star star-active'></i>
                                        </div>
                                        <div id='no_of_reviews' className='pt-2 ps-2'>(0)</div>
                                    </div>
                                    <p className="card-text mt-2"> $5000</p>
                                    <a href="#" id='view_btn' className='btn btn-block'>View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Home