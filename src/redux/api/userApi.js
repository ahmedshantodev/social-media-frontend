import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getProfileInformation: builder.query({
      query: (username) => `api/v1/user/get-profile-information/${username}`,
    }),

    updateProfilePicture: builder.mutation({
      query: (body) => ({
        url: "api/v1/user/update-profile-picture",
        method: "PUT",
        body,
      })
    }),

    updateCoverPhoto: builder.mutation({
      query: (body) => ({
        url: "api/v1/user/update-cover-photo",
        method: "PUT",
        body,
      })
    }),

    updateUserInformation: builder.mutation({
      query: (body) => ({
        url: "api/v1/user/update-user-information",
        method: "PUT",
        body,
      })
    }),
  }),
});

export const { useGetProfileInformationQuery , useUpdateProfilePictureMutation , useUpdateCoverPhotoMutation, useUpdateUserInformationMutation } = userApi;
