"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hook';

interface PrivateRouteProps {
    children: React.ReactNode;
    requiredRole: ('user' | 'admin')[];  // The role you need to check for
}

const PrivateRouteComponent: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
    const router = useRouter();

    const role = useAppSelector((state) => state.auth.user?.role);

    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true); // Set to true after first render (client-side)
    // }, []);

    useEffect(() => {
        //if (!mounted) return;
        if (role === undefined) {
            router.push('/login');
        }
        if (!requiredRole.includes(role as any)) {
            // Redirect based on role
            if (role === 'admin') {
                router.push('/adminDashboard');  // Redirect normal users to a default page if needed
            } else if (role === 'user') {
                router.push('/userProfile');
            }
        }
    }, [role, requiredRole, router]);

    // If the user has the correct role, render the child components
    if (role && requiredRole.includes(role as any)) {
        return <>{children}</>;
    }


    // Otherwise, return null or a loading spinner
    // return <div className='mt-32 mx-auto'>
    //     <p className='text-3xl font-bold'>You have no access to this route!</p>
    // </div>
    return null;
};

export default PrivateRouteComponent;
