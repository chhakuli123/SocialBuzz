import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "features/authentication";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
