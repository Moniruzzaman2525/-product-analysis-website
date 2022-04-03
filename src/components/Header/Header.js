import React from 'react';
import CustomLink from '../CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center md:justify-between py-8 px-20 bg-gray-400'>
            <div>
                <h1>logo</h1>
            </div>
            <div className='flex gap-5'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashbord">Dashbord</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;