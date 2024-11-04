import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (body) => ({
        url: "/api/v1/post/create-post",
        method: "POST",
        body,
      }),
    }),

    getPost: builder.query({
      query: () => "/api/v1/post/get-post",
    }),
  }),
});

export const { useCreatePostMutation, useGetPostQuery } = postApi;
