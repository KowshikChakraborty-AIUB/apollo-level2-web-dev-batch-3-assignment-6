"use client"
import React from 'react';
import UserSpecificPostsComponent from '../user/UserSpecificPostsComponent';
import { useAppSelector } from '@/redux/hook';

const AdminSpecificPostsComponent = () => {
    const adminData = useAppSelector((state) => state.auth.user);
    return (
        <div>
            <UserSpecificPostsComponent userId={adminData?._id} />
        </div>
    );
};

export default AdminSpecificPostsComponent;