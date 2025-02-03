/* eslint-disable @typescript-eslint/no-explicit-any */
import ManageUserProfileComponent from "@/components/user/ManageUserProfileComponent";

const manageProfileDynamicPage = async ({ params }: { params: Promise<{ id: any }> }) => {
    const { id } = await params
    
    //email id '@' becomes '%40', that's why used this decoded method
    const decodedEmailId = (decodeURIComponent(id));


    return (
        <div>
            <ManageUserProfileComponent emailId = {decodedEmailId}/>
        </div>
    );
};

export default manageProfileDynamicPage;