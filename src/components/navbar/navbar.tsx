"use client";
import Link from 'next/link';
import React from 'react';
import {
    LayoutDashboardIcon,
    LogOut,
    User,
    LockKeyholeIcon
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import tokenVerification from '@/utils/tokenVerification';
import { logOut } from '@/redux/features/authSlice/authSlice';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useGetUserByEmailIdQuery } from '@/redux/api/userApi/userApi';

const NavbarComponent = () => {
    const token = useAppSelector((state) => state.auth.token);
    const dispatch = useAppDispatch();

    const user = token ? tokenVerification(token) : null;

    const userData = useAppSelector((state) => state.auth.user);

    const { data: userCurrentImg } = useGetUserByEmailIdQuery(userData?.email || '');

    const handleLogout = () => {
        dispatch(logOut());
        toast.success("User Logged Out Successfully");
    };
    const navLinks =

        <>
            <Link href={'/'} className={`${user && userData?.role === 'admin' ? 'hidden' : 'block'} hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white`}><li className="font-bold"><a>Home</a></li></Link>
            <Link href={'/newsFeed'} className={`${user && userData?.role === 'admin' ? 'hidden' : 'block'} hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white ${user ? 'block' : 'hidden'}`}><li className="font-bold"><a>News Feeds</a></li></Link>
            <Link href={'/aboutUs'} className={`${user && userData?.role === 'admin' ? 'hidden' : 'block'} hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white`}><li className="font-bold"><a>About Us</a></li></Link>
            <Link href={'/'} className={`${user && userData?.role === 'admin' ? 'hidden' : 'block'} hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white`}><li className="font-bold"><a>Gallery</a></li></Link>
            <Link href={'/contactUs'} className={`${user && userData?.role === 'admin' ? 'hidden' : 'block'} hover:border-2 hover:border-[#6AAF07] hover:rounded sm:text-black md:text-black lg:text-white`}><li className="font-bold"><a>Contact Us</a></li></Link>
        </>


    return (
        <div>
            <div className="navbar backdrop-filter backdrop-blur-none bg-opacity-50 bg-black fixed top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-[#6AAF07] bg lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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
                    <Link href='/' className="btn btn-ghost text-xl italic"><span className='text-white'>The Garden</span><span className='text-[#6AAF07]'>Guide</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div>
                                            <Image width={50} height={50} className={userCurrentImg?.data?.profileImg ? 'cursor-pointer rounded-full w-14 h-14' : 'bg-white cursor-pointer rounded-full'} src={userCurrentImg?.data?.profileImg ? userCurrentImg?.data?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt="User Image" />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <User />
                                                <Link href={userData?.role === 'user' ? '/userProfile' : '/adminDashboard/adminHome'}>
                                                    <span>My Profile</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <LayoutDashboardIcon />
                                                <Link href={`/manageUserProfile/${userData?.email}`}>
                                                    <span>Manage Profile</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <LockKeyholeIcon />
                                                <Link href={`/changeUserPassword`}>
                                                    <span>Change Password</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <Link href={'/login'} onClick={handleLogout}>
                                            <DropdownMenuItem className="cursor-pointer">
                                                <LogOut />
                                                <span>Log out</span>
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            :
                            <div className='flex gap-6'>
                                <Link href={'/login'}>
                                    <Button className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Login</Button>
                                </Link>
                                <Link href={'/signUp'} className='hidden md:block'>
                                    <Button className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign Up</Button>
                                </Link>
                            </div>

                    }

                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;