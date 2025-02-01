import { baseApi } from "../baseApi";

const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPosts: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/posts/createGardeningPosts",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["gardeningposts"],
        }),

        getAllPosts: builder.query({
            query: () => {
                return {
                    url: "/api/posts",
                    method: "GET",
                };
            },
            providesTags: ["gardeningposts"],
        }),

        getGardeningPostsByUserId: builder.query({
            query: (userId: string) => {
                return {
                    url: `api/posts/userSpecificPost/${userId}`,
                    method: "GET",
                };
            },
            providesTags: ["gardeningposts"],
        }),
    })
})

export const { useCreatePostsMutation, useGetAllPostsQuery, useGetGardeningPostsByUserIdQuery } = postApi;