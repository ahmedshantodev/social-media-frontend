import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    sendFriendRequst: builder.mutation({
      query: (body) => ({
        url: "/api/v1/friends/send-friend-requst",
        method: "PUT",
        body,
      }),
    }),
    deleteSentRequst: builder.mutation({
      query: (body) => ({
        url: "/api/v1/friends/delete-sent-requst",
        method: "PUT",
        body,
      }),
    }),
    acceptFriendRequst: builder.mutation({
      query: (body) => ({
        url: "/api/v1/friends/accept-friend-requst",
        method: "PUT",
        body,
      }),
    }),
    rejectFriendRequst: builder.mutation({
      query: (body) => ({
        url: "/api/v1/friends/reject-friend-requst",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useSendFriendRequstMutation, useAcceptFriendRequstMutation, useDeleteSentRequstMutation, useRejectFriendRequstMutation } = friendsApi;
