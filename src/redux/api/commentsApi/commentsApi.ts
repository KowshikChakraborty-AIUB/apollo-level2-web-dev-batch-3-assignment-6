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
    }),
});

export const {
    useCreateCommentsMutation,
} = commentsApi;