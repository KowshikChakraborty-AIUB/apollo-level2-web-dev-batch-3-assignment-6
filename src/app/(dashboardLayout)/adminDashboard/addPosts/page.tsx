import AdminSpecificPostsComponent from '@/components/admin/AdminSpecificPostsComponent';
import CreatePostsComponent from '@/components/createPostsComponent/CreatePostsComponent';
import React from 'react';

const addPostsPage = () => {
    
    return (
        <div>
            <CreatePostsComponent />
            <AdminSpecificPostsComponent/>
        </div>
    );
};

export default addPostsPage;