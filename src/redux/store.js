import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./api/authenticationApi";
import { postApi } from "./api/postApi";
import { userApi } from "./api/userApi";
import activeUserSlice from "./slices/activeUserSlice";

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: activeUserSlice,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(postApi.middleware)
      .concat(userApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
