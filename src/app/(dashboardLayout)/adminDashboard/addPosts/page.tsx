import AdminSpecificPostsComponent from '@/components/admin/AdminSpecificPostsComponent';
import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import React from 'react';

const addPostsPage = () => {

    return (
        <div>
            <p className='text-center mb-4 text-lg font-bold'>Create a post</p>
            <CreatePostsComponent />
            <p className='mt-20 mb-14 text-3xl text-center font-bold'>Your Posts</p>
            <AdminSpecificPostsComponent />
        </div>
    );
};

export default addPostsPage;