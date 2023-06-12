import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import { editUserData, loginService, signUpService } from "services";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await loginService(userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserDetails = createAsyncThunk(
  "auth/editUserData",
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await editUserData(userDetails);
      return data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.foundUser;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
        toast.success(`Welcome back! ${state.user.firstName}`, { icon: "👋" });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again:( ${state.error}`);
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(action.payload.createdUser)
        );
        toast.success(
          `Account Created Successfully,
           Welcome ${state.user.firstName} `,
          { icon: "👋" }
        );
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again:( ${state.error}`);
      })
      .addCase(editUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(editUserDetails.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again, ${state.error}`);
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
