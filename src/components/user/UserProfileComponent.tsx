"use client"
import { useAppSelector } from '@/redux/hook';
import Image from 'next/image';
import React from 'react';
import CreatePostsComponent from '../createPostsComponent/CreatePostsComponent';
import UserSpecificPostsComponent from './UserSpecificPostsComponent';
import Link from 'next/link';
import { useGetUserByEmailIdQuery } from '@/redux/api/userApi/userApi';
import { Button } from '../ui/button';
import FollowUnfollowUsersComponent from './FollowUnfollowUsersComponent';

const UserProfileComponent = () => {
    const userData = useAppSelector((state) => state.auth.user);
    const { data: currentLoggedInUser } = useGetUserByEmailIdQuery(userData?.email || '');


    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-32 md:gap-32 lg:gap-0 mt-20">
                <div className="lg:fixed lg:left-5 lg:top-32 lg:h-[calc(100vh-8rem)] overflow-auto w-full md:w-3/4 lg:w-1/4 bg-white mx-0 md:mx-auto lg:mx-0 order-1 md:order-1 shadow-2xl rounded-md">
                    <ul className="menu">
                        <li>
                            <div className="mx-auto text-base font-bold  mb-4 md:mb-0">
                                <Image width={300} height={300} src={currentLoggedInUser?.data?.profileImg ? currentLoggedInUser?.data?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='User Image' className='h-24 w-24 md:h-48 md:w-48 rounded-full'></Image>
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
                    <div className='mb-3'>
                        <Link href={'/favouritePosts'}>
                            <Button className='mt-2 ml-2 text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Favourites</Button>
                        </Link>
                    </div>
                </div>
                <div className='order-3 md:order-3 lg:order-2 w-full lg:w-2/5 lg:mx-auto'>
                    <p className='text-center mt-10 mb-4 text-lg font-bold'>Post Something</p>
                    <CreatePostsComponent />
                    <p className='text-3xl font-bold text-center mt-20 mb-10'>Your Posts</p>
                    <UserSpecificPostsComponent userId={userData?._id} />
                </div>
                <div className='lg:fixed lg:right-5 lg:top-32 lg:h-[calc(100vh-8rem)] overflow-auto p-4 w-full md:w-1/2 lg:w-1/4 mx-0 md:mx-auto lg:mx-0 order-2 md:order-2 lg:order-3'>
                    <p className='text-lg font-bold mb-3 text-center'>Poeple you may know</p>
                    <FollowUnfollowUsersComponent sliceAmount={2} className={`grid-cols-1`} />
                    <Link href={'/followUnfollowUsers'}>
                        <div className='text-center'>
                            <Button className="mt-8 text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">More</Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfileComponent;