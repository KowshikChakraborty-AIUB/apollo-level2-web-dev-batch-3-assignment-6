/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => {
                return {
                    url: "/api/users",
                    method: "GET",
                };
            },
            providesTags: ["users"],
        }),
        getUsersByUserId: builder.query({
            query: (userId: string) => {
                return {
                    url: `api/users/usersByUserId/${userId}`,
                    method: "GET",
                };
            },
            providesTags: ["users"],
        }),
        followUnfollowUsers: builder.mutation<void, { action: "follow" | "unfollow", userId: any, userIWantToFollowId: string }>({
            query: ({ action, userId, userIWantToFollowId }) => {
                return {
                    url: `/api/users/followUnfollow/${action}/${userId}/${userIWantToFollowId}`,
                    method: "POST",
                    body: { action, userId, userIWantToFollowId },
                };
            },
            invalidatesTags: ["users"],
        }),
    }),
});

export const {
    useGetUsersByUserIdQuery,
    useFollowUnfollowUsersMutation,
    useGetAllUsersQuery
} = userApi;