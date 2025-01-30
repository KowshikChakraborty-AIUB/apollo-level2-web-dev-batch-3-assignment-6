import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import React from 'react';

const CreatePostsPage = () => {
    return (
        <div>
            <div className='mt-24'>
                <p className='text-4xl font-bold text-center'>Create Your Post</p>
            </div>
            <div className='my-24'>
                <CreatePostsComponent />
            </div>
        </div>
    );
};

export default CreatePostsPage;