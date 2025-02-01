import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseApiQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/",

    //credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth;

        if (token) {
            headers.set(`authorization`, `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseApiQuery,
    tagTypes: ["users", "gardeningposts", "comments"],
    endpoints: () => ({}),
});