import AdminSidebarComponent from "@/components/admin/adminSidebar";
import PrivateRouteComponent from "@/components/privateRoute/PrivateRouteComponent";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <PrivateRouteComponent requiredRole={['admin']}>
                    <AdminSidebarComponent />
                    <div className="w-full md:w-4/5 mx-auto mt-24">{children}</div>
                </PrivateRouteComponent>
            </div>
        </>
    );
};

export default layout;