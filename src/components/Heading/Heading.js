import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css'
const Heading = () => {
    return (
        <div className='heading'>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 link-name ' to={'/'} >Home</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 link-name' to={'/reviews'} >Reviews</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 link-name' to={'/dashboard'} >Dashboard</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 link-name' to={'/blogs'} >Blogs</Link>
        </div>
    );
};

export default Heading;