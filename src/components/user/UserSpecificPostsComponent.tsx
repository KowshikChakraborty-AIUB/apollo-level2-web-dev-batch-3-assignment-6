"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useGetGardeningPostsByUserIdQuery } from '@/redux/api/postApi/postApi';

const UserSpecificPostsComponent = (props: any) => {
    const { userId } = props
    const { data: userSpecificPostsData } = useGetGardeningPostsByUserIdQuery(userId);
    
    return (
        <div>

            <div className='grid grid-cols-1 w-4/6 mx-auto gap-16'>
                {
                    userSpecificPostsData?.data.length
                        ?
                        userSpecificPostsData?.data?.map((post: any) =>
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

                            </Card>
                        )
                        :
                        <div>
                            <p className='text-xxl font-bold text-center'>You&apos;ll se your posted contents here...</p>
                        </div>
                }


            </div>
        </div>
    );
};

export default UserSpecificPostsComponent;