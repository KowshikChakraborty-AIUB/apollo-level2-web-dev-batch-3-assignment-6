import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import NewsFeedGardeningPosts from '@/components/newsFeedGardeningPosts/NewsFeedGardeningPosts';
import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import { Button } from '@/components/ui/button';
import FollowUnfollowUsersComponent from '@/components/user/FollowUnfollowUsersComponent';
import Link from 'next/link';
import React from 'react';

const NewsFeedPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['admin', 'user']}>
                <div className='mt-32'>
                    <div className='flex gap-32 md:gap-32 lg:gap-0 flex-col md:flex-col lg:flex-row'>
                        <div className='lg:fixed lg:left-5 lg:top-32 lg:h-[calc(100vh-8rem)] overflow-auto w-full md:w-3/4 lg:w-1/4 bg-white shadow-xl mx-0 md:mx-auto lg:mx-0 order-1 md:order-1'>
                            <p className='text-lg font-bold my-3 text-center'>Create a post</p>
                            <CreatePostsComponent />
                        </div>
                        <div className='order-3 md:order-3 lg:order-2 w-full lg:w-2/5 lg:mx-auto'>
                            <NewsFeedGardeningPosts className={`w-full`} />
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
            </PrivateRouteComponent>
        </div>
    );
};

export default NewsFeedPage;