"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useGetAllPostsQuery } from '@/redux/api/postApi/postApi';
import { Button } from '../ui/button';
import { useAppSelector } from '@/redux/hook';
import { useCreateCommentsMutation } from '@/redux/api/commentsApi/commentsApi';
import { toast } from 'react-toastify';

const NewsFeedGardeningPosts = () => {
    const { data: postsData } = useGetAllPostsQuery({});

    const [textareaValue, setTextareaValue] = useState<{ [key: string]: string }>({});

    const handleChange = (postId: any, event: any) => {
        const newTextareaValues = { ...textareaValue, [postId]: event.target.value };

        setTextareaValue(newTextareaValues);
    };

    const userId = useAppSelector((state) => state.auth.user?._id);
    const [createComments, { isLoading }] = useCreateCommentsMutation();

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


    return (
        <div>
            <div className='grid grid-cols-1 w-4/6 mx-auto gap-16'>


                {
                    postsData?.data?.map((post: any) =>
                        <Card key={post._id} className="bg-[#9bd649] shadow-xl">
                            <CardHeader>
                                <div>
                                    <CardTitle className="text-center">Hello</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="ql-snow">
                                    <div
                                        className="ql-editor"
                                        dangerouslySetInnerHTML={{ __html: post.postContent }}
                                    />
                                </div>
                            </CardContent>
                            <div>
                                <div className='flex justify-center items-center gap-4 mt-16 mb-4'>
                                    <textarea value={textareaValue[post._id] || ''} onChange={(event) => handleChange(post._id, event)} className='w-1/2 rounded px-2 py-2' name="" id=""></textarea>
                                    <Button onClick={() => handleAddComment(post?._id)}>Add comment</Button>
                                </div>
                            </div>
                        </Card>
                    )
                }


            </div>
        </div>
    );
};

export default NewsFeedGardeningPosts;