import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  followUser,
  getAllUsers,
  getUserByUsername,
  unFollowUser,
} from "services";
import { editUserDetails } from "./authSlice";
import { toast } from "react-hot-toast";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
  allUsersError: null,
  userDetails: {},
  userDetailsStatus: "idle",
  userDetailsError: null,
  followUserStatus: "idle",
  followUserError: null,
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

export const followUnfollowUser = createAsyncThunk(
  "post/followUnfollowUser",
  async ({ userId, isFollowing, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = isFollowing
        ? await unFollowUser(userId)
        : await followUser(userId);
      dispatch(editUserDetails(data.user));
      const toastMessage = isFollowing ? "Unfollowed!" : "Followed!";
      toast.success(toastMessage);
      return data;
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
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.allUserStatus = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUserStatus = "fulfilled";
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.allUserStatus = "rejected";
        state.allUsersError = action.payload;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.userDetailsStatus = "pending";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetailsStatus = "fulfilled";
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.userDetailsStatus = "rejected";
        state.userDetailsError = action.payload;
      })
      .addCase(followUnfollowUser.fulfilled, (state, action) => {
        const { user, followUser } = action.payload;
        state.followUserStatus = "fulfilled";
        state.allUsers = state.allUsers.map((currentUser) =>
          currentUser.username === user.username
            ? { ...user }
            : currentUser.username === followUser.username
            ? { ...followUser }
            : currentUser
        );
      })
      .addCase(followUnfollowUser.rejected, (state, action) => {
        state.followUserStatus = "rejected";
        state.followUserError = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
