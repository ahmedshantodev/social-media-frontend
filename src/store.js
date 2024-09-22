import { configureStore } from "@reduxjs/toolkit";
import { activeUser } from "./features/slices/activeUserSlice";
import { authenticationApi } from "./features/api/authenticationApi";

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    user: activeUser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware),
  
});

export default store
