import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        logIn: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/auth/login",
                    method: "POST",
                    body: data,
                };
            },
        }),

        signUp: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/auth/signup",
                    method: "POST",
                    body: data,
                };
            },
        }),

    }),
});

export const {
    useLogInMutation,
    useSignUpMutation,
} = authApi;