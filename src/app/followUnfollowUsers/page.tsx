import FollowUnfollowUsersComponent from '@/components/user/FollowUnfollowUsersComponent';
import React from 'react';

const followUnfollowUsersPage = () => {
    return (
        <div>
            <p className='text-3xl font-bold text-center mt-24 mb-14'>People You May Know</p>
            <FollowUnfollowUsersComponent/>
        </div>
    );
};

export default followUnfollowUsersPage;