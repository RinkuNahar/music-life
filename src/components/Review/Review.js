import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product'
import './Review.css'
const Review = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className='product-contain'>
          {
              products.map(product=><Product product={product} key={product.name}></Product> )
          }
        </div>
    );
};

export default Review;