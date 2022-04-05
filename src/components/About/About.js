import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='h-[70vh] flex justify-center items-center flex-col'>
            <div className=''>
                <h1 className='text-center text-2xl font-bold'>It’s our privilege to introduce ourselves.
                    <br />  “WatchShopBD” is with you for a long time with <br />
                    quality products and Excellent customer services.<br />
                    Customer Satisfaction is our Prime Goal.</h1>
            </div>
            <Link className='text-2xl my-8 bg-teal-600 rounded-full  font-bold hover:bg-gray-300 py-8 px-12' to="/reviews">Customar Reviews</Link>
        </div>
    );
};

export default About;