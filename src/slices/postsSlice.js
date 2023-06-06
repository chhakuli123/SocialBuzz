import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import { addPost, deletePost, editPost, getAllPostsFromServer } from "services";

const initialState = {
  allPosts: [],
  getAllPostsStatus: "idle",
  postAddStatus: "idle",
  postDeleteStatus: "idle",
  postEditStatus: "idle",
};

export const getPosts = createAsyncThunk(
  "post/getAllPosts",
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

export const addUserPost = createAsyncThunk(
  "post/addPost",
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await addPost(postData);
      return data.posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await deletePost(postId);
      if (response.posts) {
        return response.posts;
      } else {
        throw new Error("Invalid response data");
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "post/editPost",
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await editPost(postData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
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
      })
      .addCase(addUserPost.fulfilled, (state, action) => {
        state.postAddStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Post Created Successfully!");
      })
      .addCase(addUserPost.rejected, (state) => {
        state.postAddStatus = "rejected";
      })
      .addCase(deleteUserPost.fulfilled, (state, action) => {
        state.postDeleteStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Post Deleted Successfully!");
      })
      .addCase(deleteUserPost.rejected, (state) => {
        state.postDeleteStatus = "rejected";
      })
      .addCase(editUserPost.fulfilled, (state, action) => {
        state.postEditStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Post Edited Successfully!");
      })
      .addCase(editUserPost.rejected, (state) => {
        state.postEditStatus = "rejected";
      });
  },
});

export const postReducer = postSlice.reducer;
