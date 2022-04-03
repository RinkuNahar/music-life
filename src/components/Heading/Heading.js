import React from 'react';
import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <div className='heading'>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 ' to={'/'} >Home</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 ' to={'/reviews'} >Reviews</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 ' to={'/dashboard'} >Dashboard</Link>
            <Link className='text-decoration-none text-black fw-bolder p-4 fs-4 ' to={'/blogs'} >Blogs</Link>
        </div>
    );
};

export default Heading;