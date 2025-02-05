"use client"
import { useGetUserByEmailIdQuery } from '@/redux/api/userApi/userApi';
import { useAppSelector } from '@/redux/hook';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const AdminProfileComponents = () => {
    const userData = useAppSelector((state) => state.auth.user);
    const { data: currentLoggedInUser } = useGetUserByEmailIdQuery(userData?.email || '');
    return (
        <div className='w-full'>
            <p className='text-3xl font-bold pl-4'>Welcome, {userData?.name}</p>
            <div className="bg-white shadow-2xl rounded-md">
                <ul className="menu">
                    <li>
                        <div className="mx-auto text-base font-bold  mb-4 md:mb-0">
                            <Image width={300} height={300} src={currentLoggedInUser?.data?.profileImg ? currentLoggedInUser?.data?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='User Image' className='h-24 w-24 md:h-48 md:w-48 rounded-full' />
                        </div>
                    </li>
                    <li>
                        <div className="mx-auto text-xl font-bold mb-4 md:mb-0">
                            {currentLoggedInUser?.data?.name}
                        </div>
                    </li>
                    <div className='text-base font-bold flex justify-center gap-6 my-3'>
                        <p>Followers: {currentLoggedInUser?.data.followers.length}</p>
                        <p>Following: {currentLoggedInUser?.data.following.length}</p>
                    </div>
                    <hr className='border-gray-500' />
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Email: {userData?.email}
                        </div>
                    </li>
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Address: {currentLoggedInUser?.data?.address}
                        </div>
                    </li>
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Type: {userData?.role}
                        </div>
                    </li>
                </ul>
                <div className='mt-4 ml-4'>
                    <Link href={`/manageUserProfile/${userData?.email}`}>
                        <Button className='text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Manage Profile</Button>
                    </Link>
                </div>
                <div className='mt-6'>
                    <Link href={'/followUnfollowUsers'}>
                        <p className='text-center font-bold underline text-[#6AAF07]'>People You May / Want to Follow</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminProfileComponents;