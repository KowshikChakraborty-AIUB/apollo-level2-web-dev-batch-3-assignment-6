import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import UserFavouritePostsComponent from '@/components/user/UserFavouritePostsComponent';
import React from 'react';

const favouritePostsPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['user']}>
                <UserFavouritePostsComponent />
            </PrivateRouteComponent>
        </div>
    );
};

export default favouritePostsPage;