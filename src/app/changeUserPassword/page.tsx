import ChangeUserPassword from '@/components/changeUserPassword/ChangeUserPassword';
import React from 'react';

const changeUserPasswordPage = () => {
    return (
        <div>
            <p className='text-3xl font-bold text-center mt-24 mb-10'>Change Your Password</p>
            <ChangeUserPassword/>
        </div>
    );
};

export default changeUserPasswordPage;