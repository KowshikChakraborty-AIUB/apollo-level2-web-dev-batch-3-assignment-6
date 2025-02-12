import ChangeUserPassword from '@/components/changeUserPassword/ChangeUserPassword';
import PrivateRouteComponent from '@/components/privateRoute/PrivateRouteComponent';
import React from 'react';

const changeUserPasswordPage = () => {
    return (
        <div>
            <PrivateRouteComponent requiredRole={['user', 'admin']}>
                <p className='text-3xl font-bold text-center mt-24 mb-10'>Change Your Password</p>
                <ChangeUserPassword />
            </PrivateRouteComponent>
        </div>
    );
};

export default changeUserPasswordPage;