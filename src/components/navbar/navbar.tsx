"use client";
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const NavbarComponent = () => {
    const navLinks =

        <>
            <Link href={'/'} className={'hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white'}><li className="font-bold"><a>Home</a></li></Link>
            <Link href={'/aboutUs'} className={'hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white'}><li className="font-bold"><a>About Us</a></li></Link>
            <Link href={'/'} className={'hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white'}><li className="font-bold"><a>Gallery</a></li></Link>
            <Link href={'/'} className={'hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white'}><li className="font-bold"><a>Contact Us</a></li></Link>
        </>


    return (
        <div>
            <div className="navbar backdrop-filter backdrop-blur-none bg-opacity-50 bg-black fixed top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl italic"><span className='text-white'>The Garden</span><span className='text-[#6AAF07]'>Guide</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={'/login'} className='mr-6'>
                        <Button className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Login</Button>
                    </Link>
                    <Button className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;