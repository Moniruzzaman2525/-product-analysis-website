import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='px-4 h-[70vh] py-32 mx-auto max-w-7xl'>
            <div className=' items-center w-full = mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='text-9xl m-10'>404</h1>
                    <h1 className='text-5xl m-8'>Page Not Found</h1>
                    <Link to='/' className='w-full mb-2 py-2 px-3 text-white mt-3 bg-teal-600 sm:w-auto sm:mb-0'>
                        Back to homepage
                    </Link>
                    <Link to='/reviews' className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-teal-600 sm:w-auto sm:mb-0'>
                        Reviews Page
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;