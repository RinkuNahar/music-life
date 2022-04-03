import React from 'react';
import './Product.css';
const Product = (props) => {
    
    const {name, img, review, ratings} = props.product;
    return (
      <div className='container'>
         
            <div className='product-review container'>
           
           <img src={img} alt="" />
           <h3>{name}</h3>
           <h5>{review}</h5>
           <h5>Ratings: {ratings}</h5>
       </div>
      </div>
    );
};

export default Product;