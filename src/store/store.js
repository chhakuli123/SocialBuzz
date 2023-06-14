import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, themeReducer, userReducer } from "slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    theme: themeReducer,
  },
});
