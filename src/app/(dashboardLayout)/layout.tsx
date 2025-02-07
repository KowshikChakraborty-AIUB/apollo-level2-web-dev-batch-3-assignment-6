import AdminSidebarComponent from "@/components/admin/adminSidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <AdminSidebarComponent />
                <div className="w-full md:w-4/5 mx-auto mt-28">{children}</div>
            </div>
        </>
    );
};

export default layout;