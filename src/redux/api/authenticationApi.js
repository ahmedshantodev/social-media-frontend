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

    findUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/find-user",
        method: "POST",
        body,
      }),
    }),

    findUsername: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/find-username",
        method: "POST",
        body,
      }),
    }),

    sendOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/send-otp",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/otp-verification",
        method: "POST",
        body,
      }),
    }),

    passwordReset: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/password-reset",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useFindUserMutation,
  useFindUsernameMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  usePasswordResetMutation,
} = authenticationApi;
