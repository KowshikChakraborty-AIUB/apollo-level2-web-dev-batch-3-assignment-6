import React from 'react';
import Link from "next/link";

const AdminSidebarComponent = () => {
    return (
        <div>
            <div className="flex md:h-screen">
                {/* dashboard sidebar */}
                <div className="w-full md:w-64 md:h-screen bg-[#6AAF07] shadow-xl md:fixed md:left-0 md:top-0">
                    <ul className="menu mt-20">
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard'}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard/adminHome'}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard/allUsers'}>
                                All Users
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard/addPosts'}>
                                Add Posts
                            </Link>
                        </li>
                        <li>
                            <Link className="text-base font-bold text-white border md:border-none border-white mb-4 md:mb-0" href={'/adminDashboard/adminFavouritePosts'}>
                                Favourites
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebarComponent;