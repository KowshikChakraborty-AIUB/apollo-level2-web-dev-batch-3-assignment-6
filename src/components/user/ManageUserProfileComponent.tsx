"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const ManageUserProfileComponent = (props: any) => {
    const { emailId } = props;
    return (
        <div>
            {emailId}
        </div>
    );
};

export default ManageUserProfileComponent;