import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllUsers, getUserByUsername } from "services";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
  allUsersError: null,
  userDetails: {},
  userDetailsError: null,
};

export const fetchAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsers();
      return data.users;
    } catch (e) {
      console.error("Error:", e);
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "post/getUserByUsername",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserByUsername(username);
      return data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUserStatus = "fulfilled";
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.allUserStatus = "rejected";
        state.allUsersError = action.payload;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetailsStatus = "fulfilled";
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.userDetailsStatus = "rejected";
        state.userDetailsError = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
