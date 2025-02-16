import AdminSpecificPostsComponent from '@/components/admin/AdminSpecificPostsComponent';
import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import React from 'react';

const addPostsPage = () => {

    return (
        <div>
            <CreatePostsComponent />
            <p className='mt-32 mb-14 text-3xl text-center font-bold'>Your Posts</p>
            <AdminSpecificPostsComponent />
        </div>
    );
};

export default addPostsPage;