import { baseApi } from "../../api/baseApi";

const favouritePostsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createFavouritePosts: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/favourites/createFavouritePosts",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["favouriteposts"],
        }),
        getUserFavouritePosts: builder.query({
            query: (userId: string) => {
                return {
                    url: `api/favourites/favouritePosts/${userId}`,
                    method: "GET",
                };
            },
            providesTags: ["favouriteposts"],
        }),
    }),
});

export const {
    useCreateFavouritePostsMutation,
    useGetUserFavouritePostsQuery
} = favouritePostsApi;