"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetPostsAndCommentsTrendQuery, useGetTotalCommentsCountQuery } from '@/redux/api/commentsApi/commentsApi';
import { useGetTotalPostsCountQuery } from '@/redux/api/postApi/postApi';
import { useGetTotalUsersCountQuery } from '@/redux/api/userApi/userApi';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
//import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const AdminDashboardComponent = () => {
    const { data: totalUsersData } = useGetTotalUsersCountQuery({})

    const { data: totalPostsData } = useGetTotalPostsCountQuery({})

    const { data: totalCommentsData } = useGetTotalCommentsCountQuery({})

    const {data: postsAndCommentsTrend} = useGetPostsAndCommentsTrendQuery({})

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <Card className='bg-[#c8f38d]'>
                    <CardHeader>
                        <CardTitle>Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{totalUsersData?.data}</p>
                    </CardContent>
                </Card>

                <Card className='bg-[#c8f38d]'>
                    <CardHeader>
                        <CardTitle>Total Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{totalPostsData?.data}</p>
                    </CardContent>
                </Card>

                <Card className='bg-[#c8f38d]'>
                    <CardHeader>
                        <CardTitle>Total Comments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{totalCommentsData?.data}</p>
                    </CardContent>
                </Card>

                <div className="mt-20 col-span-1 md:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Posts and Comments Trend</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={postsAndCommentsTrend?.data}>
                                    <XAxis dataKey="date" stroke="#6AAF07" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="posts" stroke="#6AAF07" strokeWidth={2} />
                                    <Line type="monotone" dataKey="comments" stroke="#FF5733" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardComponent;