"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
import { useGetAllUsersQuery, useUpdateUserRoleMutation } from "@/redux/api/userApi/userApi";
import Image from "next/image";
import { toast } from "react-toastify";

const ManageUsersComponent = () => {
    const { data: allUsersData } = useGetAllUsersQuery({});

    const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

    const handleUpdateUserRole = async (userId: string) => {

        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }
        try {

            const res: any = await updateUserRole(userId);

            if (res?.data?.success) {
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allUsersData?.data?.map((user: any) =>
                            <TableRow key={user?._id}>
                                <TableCell>
                                    <Image width={50} height={50} className="w-12 h-12 rounded-full" src={user?.profileImg ? user?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt="User Image" />
                                </TableCell>
                                <TableCell className="font-medium">{user?.name}</TableCell>
                                <TableCell>{user?.email}</TableCell>
                                <TableCell className="capitalize font-medium">{user?.role}</TableCell>
                                <TableCell className="text-right">
                                    <Button onClick={() => handleUpdateUserRole(user?._id)} className="mr-0 md:mr-0 lg:mr-2 text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">{user?.role === 'admin' ? 'Make User' : 'Make Admin'}</Button>
                                    <Button className="mt-2 md:mt-2 lg:mt-0 text-base font-bold text-center bg-red-500 text-white hover:bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default ManageUsersComponent;