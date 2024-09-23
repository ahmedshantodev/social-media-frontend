import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/registration",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegistrationMutation , useLoginMutation } = authenticationApi;
