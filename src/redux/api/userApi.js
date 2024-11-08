import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (username) => `api/v1/user/get-user/${username}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
