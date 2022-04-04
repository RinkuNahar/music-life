import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/heading.jpg';
import Product from '../Product/Product';
import './Homepage.css'
const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);


    return (
       <div>
            <div className='d-flex homepage-container container mt-4'>
           <div className='detail '>
                <h2 className='text-1 fw-bolder'>Good Music Doesn't Have an Expiration Date</h2>
                <h1 className='fw-bold text-2'>Find Your Best</h1>
                <p className='fs-4 '>If I can put on my album in a car or on my headphones and listen to the whole thing and love it, that's what I'm going to be happy putting out there.So choose it wisely and enjoy your life with best portable and non-portable headphones </p>
           </div>
           <div className='image-side'>
                <img src={Image} alt="" />
           </div>
        </div>

        <div className='tag-name'>
            <h1 className='review-heading'>Customer Review</h1>
        </div>
        
        <section className='product-contain'>
      
        {
              products.slice(0,3).map(product=> <Product product={product} key={product.name} >
              
              </Product>)
          }
        </section>

        <div className=' mt-4 mb-4'>
                 <Link to="/reviews" >
                     <button className='review-button border-0 p-2'>See More</button>
                 </Link>
                 </div>

       </div>
    );
};


// const sliceNum = phones.slice(0,20);

export default HomePage;