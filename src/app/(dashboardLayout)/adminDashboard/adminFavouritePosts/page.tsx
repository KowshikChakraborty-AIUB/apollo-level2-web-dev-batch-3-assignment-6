import UserFavouritePostsComponent from '@/components/user/UserFavouritePostsComponent';
import React from 'react';

const adminFavouritePostsPage = () => {
    return (
        <div>
            <p className='text-3xl text-center font-bold'>Your Favourite Lists</p>
            <UserFavouritePostsComponent />
        </div>
    );
};

export default adminFavouritePostsPage;