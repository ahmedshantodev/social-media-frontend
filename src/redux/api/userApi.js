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

    updateProfilePicture: builder.mutation({
      query: (body) => ({
        url: "api/v1/user/update-profile-picture",
        method: "PUT",
        body,
      })
    }),
  }),
});

export const { useGetUserQuery , useUpdateProfilePictureMutation } = userApi;
