import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./api/authenticationApi";
import { postApi } from "./api/postApi";
import activeUserSlice  from "./slices/activeUserSlice";

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    user: activeUserSlice
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
