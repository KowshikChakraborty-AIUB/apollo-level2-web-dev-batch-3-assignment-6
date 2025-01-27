"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import loginValidationSchema from "@/validationSchema/loginValidationSchema";
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
import Link from "next/link";
import { useLogInMutation } from "@/redux/api/authApi/authApi";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import tokenVerification from "@/utils/tokenVerification";
import { setUser } from "@/redux/features/authSlice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
    const [userLoginInfo, { isLoading }] = useLogInMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const form = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof loginValidationSchema>) => {
        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center min-h-screen">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }

        try {
            const res: any = await userLoginInfo(values);

            if (res?.data?.success) {
                const token = res?.data?.token;
                const user = tokenVerification(token);
                dispatch(setUser({ user, token }));
                router.push("/");
                toast.success(res?.data?.message);
                
            }
            if (res.error) {
                toast.error(res?.error?.message || res?.error?.data?.message);
                console.log(res?.error?.message || res?.error?.data?.message);
            }


        } catch (error: any) {
            toast.error(error.message);
            console.log(error.message);
            
        }
    }
    return (
        <div>
            <div>
                <p className="my-3 text-4xl font-bold text-center">Login to Know More!</p>
            </div>
            <div className="mx-auto flex justify-center items-center gap-7 bg-white px-6 py-6 rounded-md">
                <div className="hidden md:hidden lg:block">
                    <Image width={600} height={600} src="https://i.ibb.co.com/Qbjbswx/gardening-login-pic.webp" alt="" className="rounded" />
                </div>
                <div className="w-full md:full lg:w-1/2 shadow-2xl px-7 py-7 rounded-md">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type your Email Address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your Password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Password.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Login</Button>
                        </form>
                    </Form>
                    <p className="mt-2 text-base font-bold">Don&apos;t have an account? <Link href={'/signUp'} className="text-[#6AAF07]">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;