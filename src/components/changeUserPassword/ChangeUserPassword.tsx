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
import changeUserPasswordValidationSchema from "@/validationSchema/changeUserPasswordValidationSchema";
import { Input } from "@/components/ui/input"
import { useChangeUserPasswordMutation } from "@/redux/api/authApi/authApi";
import { useAppDispatch } from "@/redux/hook";
import { logOut } from "@/redux/features/authSlice/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ChangeUserPassword = () => {

    const form = useForm<z.infer<typeof changeUserPasswordValidationSchema>>({
        resolver: zodResolver(changeUserPasswordValidationSchema),
        defaultValues: {
            body: {
                oldPassword: "",
                newPassword: "",
            }
        },
    })

    const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation()
    
    const dispatch = useAppDispatch();

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof changeUserPasswordValidationSchema>) => {


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
            const data = values?.body
            const res: any = await changeUserPassword(data);

            console.log(res);
            

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
            <div className="w-full md:w-3/4 lg:w-3/5 my-10 mx-auto shadow-2xl px-6 py-6 rounded-md">
                <div className="w-4/5 mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="body.oldPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Old Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your Old Password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Old Password.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body.newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your New Password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your New Password.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="text-base font-bold w-full text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Change Password</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ChangeUserPassword;