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
import signUpValidationSchema from "@/validationSchema/signUpValidationSchema";
import { useSignUpMutation } from "@/redux/api/authApi/authApi";
import tokenVerification from "@/utils/tokenVerification";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/authSlice/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {

    const [signUp, { isLoading }] = useSignUpMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const form = useForm<z.infer<typeof signUpValidationSchema>>({
        resolver: zodResolver(signUpValidationSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            role: 'user'
        },
    })

    const onSubmit = async (values: z.infer<typeof signUpValidationSchema>) => {

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
            const res: any = await signUp(values);

            if (res?.data?.success) {
                const token = res?.data?.token;
                const user = tokenVerification(token);
                dispatch(setUser({ user, token }));
                router.push('/');
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
            <div>
                <p className="my-3 text-4xl font-bold text-center">Create Your Account</p>
            </div>
            <div className="w-3/5 my-10 mx-auto shadow-2xl px-6 py-6 rounded-md">
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
                            <Button type="submit" className="text-base font-bold w-full text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign Up</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;