import React from 'react'


const ProductItem = ({product}) => {
  return (
 
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card p-3 rounded'>
                <img src={product?.images[0].url} alt="productImg" className='card-img-top' /> 
                
                <div className="card-body px-2 d-flex justify-content-center  flex-column">
                    <h5 className='card-title'>
                        <a href="#">{product.name}</a>
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
                    <p className="card-text mt-2">{product.price}</p>
                    <a href="#" id='view_btn' className='btn btn-block'>View Details</a>
                </div>
            </div>
        </div>
  
  )
}

export default ProductItem