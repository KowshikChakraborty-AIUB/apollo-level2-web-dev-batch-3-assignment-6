"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { imgBBUploadImage } from "@/utils/imgbbUploadImage";
import profileUpdateValidationSchema from "@/validationSchema/profileUpdateValidationSchema";
import { useDeleteUserMutation, useGetUserByEmailIdQuery, useUpdateUserByEmailIdMutation } from "@/redux/api/userApi/userApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { logOut } from "@/redux/features/authSlice/authSlice";

const ManageUserProfileComponent = (props: any) => {
    const dispatch = useAppDispatch();
    const { emailId } = props;

    const { data: userData } = useGetUserByEmailIdQuery(emailId);
    const [updateUserByEmailId, { isLoading }] = useUpdateUserByEmailIdMutation();
    const [deleteUser] = useDeleteUserMutation();

    const router = useRouter();

    const form = useForm<z.infer<typeof profileUpdateValidationSchema>>({
        resolver: zodResolver(profileUpdateValidationSchema),
        defaultValues: {
            name: userData?.data?.name,
            phone: userData?.data?.phone,
            profileImg: '',
            address: userData?.data?.address,
        },
    })

    const onSubmit = async (values: z.infer<typeof profileUpdateValidationSchema>) => {

        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }

        if (values.profileImg) {
            //Uploading image to imgbb
            const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
            const file = inputElement?.files?.[0];

            const img = file ? await imgBBUploadImage(file) : undefined

            //setting generated imgbb link to form value
            values.profileImg = img
        } else {
            values.profileImg = userData?.data?.profileImg
        }

        console.log(values);


        try {
            const res: any = await updateUserByEmailId({ emailId, data: values });

            console.log(res);


            if (res?.data?.success) {
                router.push('/userProfile');
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    }

    const handleDeleteProfile = async (userId: any) => {
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

            const res: any = await deleteUser(userId);

            if (res?.data?.success) {
                dispatch(logOut());
                router.push('/login');
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
            <div className="w-full md:w-3/4 lg:w-3/5 my-20 mx-auto shadow-2xl px-6 py-6 rounded-md">
                <div className="w-4/5 mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Your Phone Number" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Phone Number.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="profileImg"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Profile Picture (Optional)</FormLabel>
                                        <FormControl>
                                            <Input type="file" placeholder="Your Profile Image" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Upload Your Profile Image.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Your Address" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Update</Button>
                        </form>
                    </Form>
                    {/* <div className="mt-4">
                        <Button onClick={() => handleDeleteProfile(userData?.data?._id)} className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Delete Profile</Button>
                    </div> */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn mt-4 bg-red-500 text-white hover:bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-base font-bold" onClick={() => (document?.getElementById('my_modal_5') as HTMLDialogElement ).showModal()}>Delete Profile</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure want to delete your profile?</h3>
                            <p className="py-4">Press ESC key or click the <b>cencel</b> button below to cencel</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Button onClick={() => handleDeleteProfile(userData?.data?._id)} className="text-base font-bold text-center bg-red-500 text-white hover:bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mr-4">Delete</Button>
                                    <button className="btn ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Cencel</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ManageUserProfileComponent;