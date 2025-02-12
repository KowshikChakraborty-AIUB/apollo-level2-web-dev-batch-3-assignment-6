import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import UserProfileComponent from '@/components/user/UserProfileComponent';
import React from 'react';

const UserProfilePage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['user']}>
                <UserProfileComponent />
            </PrivateRouteComponent>
        </div>
    );
};

export default UserProfilePage;