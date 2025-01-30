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
    })
})

export const { useCreatePostsMutation, useGetAllPostsQuery } = postApi;