import { configureStore } from "@reduxjs/toolkit";
import { activeUser } from "./slices/activeUserSlice";

export default configureStore({
  reducer: {
    user: activeUser,
  },
});
