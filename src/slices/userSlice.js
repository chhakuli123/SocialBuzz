import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-hot-toast";
import { getAllUsers } from "services";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
  allUsersError: null,
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
        toast.error(
          `Some went wrong, Please try again, ${state.allUsersError}`
        );
      });
  },
});

export const userReducer = userSlice.reducer;
