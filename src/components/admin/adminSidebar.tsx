import React from 'react';
import Link from "next/link";

const AdminSidebarComponent = () => {
    return (
        <div>
            <div className="flex">
                {/* dashboard sidebar */}
                <div className="w-24 md:w-64 min-h-screen bg-[#6AAF07] shadow-xl">
                    <ul className="menu mt-20">
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard'}>
                                Admin Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard/allUsers'}>
                                All Users
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={''}>
                                Add Posts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebarComponent;