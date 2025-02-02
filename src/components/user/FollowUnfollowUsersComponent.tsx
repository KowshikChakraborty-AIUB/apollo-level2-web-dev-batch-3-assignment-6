"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFollowUnfollowUsersMutation, useGetAllUsersQuery } from '@/redux/api/userApi/userApi';
import { useAppSelector } from '@/redux/hook';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';

const FollowUnfollowUsersComponent = () => {
    const { data: allUsersData } = useGetAllUsersQuery({})
    const userData = useAppSelector((state) => state.auth.user);

    const filteredUsers = allUsersData?.data?.filter((users: any) => users?.email != userData?.email)
    const currentLoggedInUser = allUsersData?.data?.filter((user: any) => user?.email == userData?.email)

    const [followUnfollowUsers, { isLoading }] = useFollowUnfollowUsersMutation()

    const handleFollowUnfollowUsers = async (userIWantToFollowId: string, isFollowing: boolean) => {
        const action = isFollowing ? "unfollow" : "follow";

        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }
        try {

            const res: any = await followUnfollowUsers({ action, userId: userData?._id, userIWantToFollowId });

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    filteredUsers?.map((user: any) => {

                        const isFollowing: any = currentLoggedInUser[0]?.following?.includes(
                            user?._id
                        );
                        

                        return (
                            <div key={user?._id} className="bg-white shadow-2xl rounded-md">
                                <ul className="menu">
                                    <li>
                                        <div className="mx-auto text-base font-bold  mb-4 md:mb-0">
                                            <Image width={100} height={100} src={user?.profileImg ? user?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='User Image' className='h-24 w-24 md:h-28 md:w-28 rounded-full'></Image>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mx-auto text-xl font-bold mb-4 md:mb-0">
                                            {user?.name}
                                        </div>
                                    </li>
                                    <div className='text-base font-bold flex justify-center gap-6 my-3'>
                                        <p>Followers: {user?.followers.length}</p>
                                        <p>Following: {user?.following?.length}</p>
                                    </div>
                                    <hr className='border-gray-500' />
                                    <li>
                                        <div className="text-lg mb-4 md:mb-0">
                                            Email: {user?.email}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-lg mb-4 md:mb-0">
                                            Address: {user?.address}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-lg mb-4 md:mb-0">
                                            Type: {user?.role}
                                        </div>
                                    </li>
                                </ul>
                                <div className='text-center mb-2'>
                                    <Button
                                        className={`px-4 py-2  rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${isFollowing
                                            ? "bg-[#6AAF07] hover:bg-[#6AAF07] font-bold  text-white"
                                            : "bg-white hover:bg-white  text-black font-bold"
                                            }`}
                                        onClick={() =>
                                            handleFollowUnfollowUsers(user?._id, isFollowing)
                                        }
                                    >
                                        {isFollowing ? "Unfollow" : "Follow"}
                                    </Button>
                                </div>
                            </div>
                        )
                    }

                    )
                }
            </div>
        </div>
    );
};

export default FollowUnfollowUsersComponent;