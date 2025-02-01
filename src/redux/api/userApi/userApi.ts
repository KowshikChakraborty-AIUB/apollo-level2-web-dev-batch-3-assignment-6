import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsersByUserId: builder.query({
            query: (userId: string) => {
                return {
                    url: `api/users/usersByUserId/${userId}`,
                    method: "GET",
                };
            },
            providesTags: ["users"],
        }),
    }),
});

export const {
    useGetUsersByUserIdQuery
} = userApi;