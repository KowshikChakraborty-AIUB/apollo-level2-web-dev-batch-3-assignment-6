/* eslint-disable @typescript-eslint/no-explicit-any */
import PrivateRouteComponent from "@/components/privateRoute/PrivateRouteComponent";
import ManageUserProfileComponent from "@/components/user/ManageUserProfileComponent";

const manageProfileDynamicPage = async ({ params }: { params: Promise<{ id: any }> }) => {
    const { id } = await params

    //email id '@' becomes '%40', that's why used this decoded method
    const decodedEmailId = (decodeURIComponent(id));


    return (
        <div>
            <PrivateRouteComponent requiredRole={['user', 'admin']}>
                <ManageUserProfileComponent emailId={decodedEmailId} />
            </PrivateRouteComponent>
        </div>
    );
};

export default manageProfileDynamicPage;