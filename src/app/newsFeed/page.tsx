import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import NewsFeedGardeningPosts from '@/components/newsFeedGardeningPosts/NewsFeedGardeningPosts';
import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import React from 'react';

const NewsFeedPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['admin', 'user']}>
                <div className='mt-32'>
                    <div className='flex gap-5 flex-col md:flex-col lg:flex-row'>
                        <div className='w-full md:w-3/4 lg:w-2/5 h-3/4 flex bg-white shadow-xl mx-0 md:mx-auto lg:mx-0 order-1 md:order-1'>
                            <CreatePostsComponent />
                        </div>
                        <div className='order-3 md:order-3 lg:order-2'>
                            <NewsFeedGardeningPosts className={`w-full`} />
                        </div>
                        <div className='w-1/4 order-2 md:order-2 lg:order-3'>
                            hello
                        </div>
                    </div>
                </div>
            </PrivateRouteComponent>
        </div>
    );
};

export default NewsFeedPage;