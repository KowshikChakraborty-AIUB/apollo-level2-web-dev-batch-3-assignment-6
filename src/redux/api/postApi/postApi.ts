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

        gardeningPostsUpvote: builder.mutation<void, { postId: string, userId: string }>({
            query: ({ postId, userId }) => {
                return {
                    url: `/api/posts/upvote/${postId}/${userId}`,
                    method: "POST",
                    body: { postId, userId },
                };
            },
            invalidatesTags: ["gardeningposts"],
        }),

        gardeningPostsDownvote: builder.mutation<void, { postId: string, userId: string }>({
            query: ({ postId, userId }) => {
                return {
                    url: `/api/posts/downvote/${postId}/${userId}`,
                    method: "POST",
                    body: { postId, userId },
                };
            },
            invalidatesTags: ["gardeningposts"],
        }),
    })
})

export const { useCreatePostsMutation, useGetAllPostsQuery, useGetGardeningPostsByUserIdQuery, useGardeningPostsUpvoteMutation, useGardeningPostsDownvoteMutation } = postApi;