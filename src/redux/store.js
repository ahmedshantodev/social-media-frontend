import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./api/authenticationApi";
import activeUserSlice  from "./slices/activeUserSlice";

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    user: activeUserSlice
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware),
  
});

export default store;
