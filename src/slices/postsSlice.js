import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllPostsFromServer } from "services";

const initialState = {
  allPosts: [],
  getAllPostsStatus: "idle",
};

export const getPosts = createAsyncThunk(
  "/post/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsFromServer();
      return data.posts;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getAllPostsStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.getAllPostsStatus = "rejected";
      });
  },
});

export const postReducer = postSlice.reducer;
