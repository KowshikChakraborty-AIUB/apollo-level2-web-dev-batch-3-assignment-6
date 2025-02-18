import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import FollowUnfollowUsersComponent from '@/components/user/FollowUnfollowUsersComponent';
import React from 'react';

const followUnfollowUsersPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['user', 'admin']}>
                <p className='text-3xl font-bold text-center mt-24 mb-14'>People You May Know</p>
                <FollowUnfollowUsersComponent className={`grid-cols-3`} />
            </PrivateRouteComponent>
        </div>
    );
};

export default followUnfollowUsersPage;