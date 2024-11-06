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

    findUserEmail: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/find-user-email",
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

    sendPasswordResetOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/send-password-reset-otp",
        method: "POST",
        body,
      }),
    }),

    verifyPasswordResetOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/verify-password-reset-otp",
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

    sendUserVerificationOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/send-user-verification-otp",
        method: "POST",
        body,
      }),
    }),

    verifyUserVerificationOtp: builder.mutation({
      query: (body) => ({
        url: "/api/v1/authentication/verify-user-verification-otp",
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
  useFindUserEmailMutation,
  useFindUsernameMutation,
  useSendPasswordResetOtpMutation,
  useVerifyPasswordResetOtpMutation,
  usePasswordResetMutation,
  useSendUserVerificationOtpMutation,
  useVerifyUserVerificationOtpMutation,
} = authenticationApi;
