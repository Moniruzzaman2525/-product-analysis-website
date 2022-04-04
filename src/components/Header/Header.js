import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <div className='sticky top-0 flex  justify-between py-8 px-20 bg-gray-400'>
                <div>
                    <Link to="/"><span className='text-2xl' style={{ color: '#33d9b2' }}>WATCH</span><span className='font-bold text-2xl'>SHOP</span></Link>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                    <div className={`gap-5 font-bold text-2xl md:static absolute ${open ? 'top-5' && 'right-8' : 'top-[-220px]'}`}>
                        <div className='md:flex gap-5 bg-gray-400'>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/reviews">Reviews</CustomLink>
                            <CustomLink to="/dashbord">Dashbord</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;