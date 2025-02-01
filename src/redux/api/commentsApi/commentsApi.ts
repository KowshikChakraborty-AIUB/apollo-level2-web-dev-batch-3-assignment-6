import { baseApi } from "../../api/baseApi";

const commentsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createComments: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/comments/addComment",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["comments"],
        }),
        getCommentsByPostId: builder.query({
            query: (postId: string) => {
                return {
                    url: `api/comments/commentsByPostId/${postId}`,
                    method: "GET",
                };
            },
            providesTags: ["comments"],
        }),
    }),
});

export const {
    useCreateCommentsMutation,
    useGetCommentsByPostIdQuery,
} = commentsApi;