"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useGardeningPostsDownvoteMutation, useGardeningPostsUpvoteMutation } from '@/redux/api/postApi/postApi';
import { useCreateCommentsMutation } from '@/redux/api/commentsApi/commentsApi';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';
import ShowSpecificUserComentsComponent from './ShowSpecificUserComentsComponent';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hook';
import { useCreateFavouritePostsMutation, useGetUserFavouritePostsQuery } from '@/redux/api/favouritePostsApi/favouritePostsApi';

const UserFavouritePostsComponent = () => {
    const userId = useAppSelector((state) => state.auth.user?._id);
    const { data: userFavouritePostsData } = useGetUserFavouritePostsQuery(userId || '');

    console.log(userFavouritePostsData);


    const [textareaValue, setTextareaValue] = useState<{ [key: string]: string }>({});

    const handleChange = (postId: any, event: any) => {
        const newTextareaValues = { ...textareaValue, [postId]: event.target.value };

        setTextareaValue(newTextareaValues);
    };

    const [createComments, { isLoading }] = useCreateCommentsMutation();
    const [gardeningPostsUpvote] = useGardeningPostsUpvoteMutation();
    const [gardeningPostsDownvote] = useGardeningPostsDownvoteMutation();

    const [createFavouritePosts] = useCreateFavouritePostsMutation();

    const handleAddComment = async (postId: any) => {
        //console.log(textareaValue[postId]);
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

            const commentsData = { userId, postId: postId, commentText: textareaValue[postId] };

            const res: any = await createComments(commentsData);

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }

    }

    const handleAddUpvotes = async (postId: any, userId: any) => {
        //console.log(textareaValue[postId]);
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

            const res: any = await gardeningPostsUpvote({ postId, userId });

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }

    }

    const handleAddDownvotes = async (postId: any, userId: any) => {
        //console.log(textareaValue[postId]);
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

            const res: any = await gardeningPostsDownvote({ postId, userId });

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }

    }

    const handleAddToFavourites = async (userId: any, postId: any,) => {
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

            const res: any = await createFavouritePosts({ userId, postId });

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }

    }

    return (
        <div>
            <p className='mt-20 text-3xl text-center font-bold'>Your Favourite Lists</p>

            <div className='mt-14 grid grid-cols-1 w-full md:w-full lg:w-4/6 mx-auto gap-16'>
                {
                    userFavouritePostsData?.data?.length
                        ?
                        userFavouritePostsData?.data?.map((post: any) => {

                            const userFavouritePostsDataObject = userFavouritePostsData?.data?.find((userFav: any) => userFav?.postId?._id == post?.postId?._id)

                            return (
                                <Card key={post?.postId?._id} className="bg-[#96c456] shadow-xl">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-4 pl-4 pt-4'>
                                            <Image width={56} height={56} src={post?.postId?.userId?.profileImg ? post?.postId?.userId?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='' className='h-14 w-14 rounded-full'></Image>
                                            <p className='text-xl font-bold'>{post?.postId?.userId?.name}</p>
                                        </div>
                                        <div className='pr-4'>
                                            <Button onClick={() => handleAddToFavourites(userId, post?.postId?._id)} className='text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>{userFavouritePostsDataObject?.postId?._id == post?.postId?._id ? 'Remove from Favourite' : 'Add to Favourite'}</Button>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div>
                                            <CardTitle className="text-center">Hello</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="ql-snow">
                                            <div
                                                className="ql-editor"
                                                dangerouslySetInnerHTML={{ __html: post?.postId?.postContent }}
                                            />
                                        </div>
                                    </CardContent>
                                    <div className='ml-5 mt-5'>
                                        <p className='text-lg font-bold mb-3'>Comments</p>
                                        <ShowSpecificUserComentsComponent postId={post?.postId?._id} />
                                    </div>
                                    <div>
                                        <div className='flex justify-center items-center gap-4 mt-16 mb-4 px-0 md:px-4'>
                                            <div className='flex flex-col md:flex-row gap-3 items-center'>
                                                <p className='text-2xl font-bold cursor-pointer' onClick={() => handleAddUpvotes(post?.postId?._id, userId)}>&#8593;</p>
                                                <p className='font-bold'>{post?.postId?.upvote?.length}</p>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-3 items-center'>
                                                <p className='text-2xl font-bold cursor-pointer' onClick={() => handleAddDownvotes(post?.postId?._id, userId)}>&#8595;</p>
                                                <p className='font-bold'>{post?.postId?.downvote?.length}</p>
                                            </div>
                                            <textarea value={textareaValue[post?.postId?._id] || ''} onChange={(event) => handleChange(post?.postId?._id, event)} className='w-1/2 rounded px-2 py-2' name="" id=""></textarea>
                                            <Button onClick={() => handleAddComment(post?.postId?._id)} className='text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Add comment</Button>
                                        </div>
                                    </div>
                                </Card>
                            )
                        }
                        )
                        :
                        <div>
                            <p className='text-xxl font-bold text-center'>You&apos;ll se your favourite post lists here...</p>
                        </div>
                }


            </div>
        </div>
    );
};

export default UserFavouritePostsComponent;