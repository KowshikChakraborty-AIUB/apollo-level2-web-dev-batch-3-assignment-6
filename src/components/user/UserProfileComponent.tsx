"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/redux/hook';
import Image from 'next/image';
import React from 'react';
import CreatePostsComponent from '../createPostsComponent/CreatePostsComponent';
import UserSpecificPostsComponent from './UserSpecificPostsComponent';
import Link from 'next/link';
import { useGetAllUsersQuery } from '@/redux/api/userApi/userApi';

const UserProfileComponent = () => {
    const { data: allUsersData } = useGetAllUsersQuery({})
    const userData = useAppSelector((state) => state.auth.user);

    const currentLoggedInUser = allUsersData?.data?.filter((user: any) => user?.email == userData?.email)
    

    return (
        <div>
            <div className="flex flex-col md:flex-row mt-20">
                <div className="w-full md:w-full lg:w-80 h-3/4 min-h-screen bg-white shadow-2xl rounded-md">
                    <ul className="menu">
                        <li>
                            <div className="mx-auto text-base font-bold  mb-4 md:mb-0">
                                <Image width={300} height={300} src={userData?.profileImg ? userData?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='User Image' className='h-24 w-24 md:h-48 md:w-48 rounded-full'></Image>
                            </div>
                        </li>
                        <li>
                            <div className="mx-auto text-xl font-bold mb-4 md:mb-0">
                                {userData?.name}
                            </div>
                        </li>
                        <div className='text-base font-bold flex justify-center gap-6 my-3'>
                            <p>Followers: {currentLoggedInUser && currentLoggedInUser[0]?.followers.length}</p>
                            <p>Following: {currentLoggedInUser && currentLoggedInUser[0]?.following.length}</p>
                        </div>
                        <hr className='border-gray-500' />
                        <li>
                            <div className="text-lg mb-4 md:mb-0">
                                Email: {userData?.email}
                            </div>
                        </li>
                        <li>
                            <div className="text-lg mb-4 md:mb-0">
                                Address: {userData?.address}
                            </div>
                        </li>
                        <li>
                            <div className="text-lg mb-4 md:mb-0">
                                Type: {userData?.role}
                            </div>
                        </li>
                    </ul>
                    <div className='mt-6'>
                        <Link href={'/followUnfollowUsers'}>
                            <p className='text-center font-bold underline text-[#6AAF07]'>People You May / Want to Follow</p>
                        </Link>
                    </div>
                </div>
                <div className='mx-auto'>
                    <p className='text-center mt-10 mb-4 text-lg font-bold'>Post Something</p>
                    <CreatePostsComponent />
                    <p className='text-3xl font-bold text-center mt-20 mb-10'>Your Posts</p>
                    <UserSpecificPostsComponent userId={userData?._id} />
                </div>
            </div>
        </div>
    );
};

export default UserProfileComponent;