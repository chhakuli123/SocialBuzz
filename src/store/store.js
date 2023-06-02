import { configureStore } from "@reduxjs/toolkit";
import { authReducer, userReducer } from "slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
