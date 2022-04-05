import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='flex flex-col justify-center items-center h-[70vh]'>
            <div className=' '>
                <div>
                    <h1 className='text-9xl m-14'>404</h1>
                    <h1 className='text-5xl my-8'>Page Not Found</h1>
                    <div className='ml-8'>
                        <Link to='/' className='w-full mb-2 py-2 px-3 text-white mt-3 bg-teal-600 sm:w-auto sm:mb-0'>
                            Back to homepage
                        </Link>
                        <Link to='/reviews' className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-teal-600 sm:w-auto sm:mb-0'>
                            Reviews Page
                        </Link>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;