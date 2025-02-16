import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import UserFavouritePostsComponent from '@/components/user/UserFavouritePostsComponent';
import React from 'react';

const favouritePostsPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['user']}>
                <p className='mt-32 text-3xl text-center font-bold'>Your Favourite Lists</p>
                <UserFavouritePostsComponent />
            </PrivateRouteComponent>
        </div>
    );
};

export default favouritePostsPage;