import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  addComment,
  addPost,
  deleteComment,
  deletePost,
  editComment,
  editPost,
  getAllPostsFromServer,
  likePost,
  dislikePost,
} from "services";

const initialState = {
  allPosts: [],
  getAllPostsStatus: "idle",
  postAddStatus: "idle",
  postDeleteStatus: "idle",
  postEditStatus: "idle",
  commentsStatus: "idle",
  commentsError: null,
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

export const addUserComment = createAsyncThunk(
  "comments/addComment",
  async ({ postId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await addComment(postId, commentData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserComment = createAsyncThunk(
  "comments/editComment",
  async ({ postId, commentId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await editComment(postId, commentId, commentData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUserComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteComment(postId, commentId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const likeDislikeUserPost = createAsyncThunk(
  "post/likeDislikeUserPost",
  async ({ postId, isLiked }, { rejectWithValue }) => {
    try {
      const { data } = isLiked
        ? await dislikePost(postId)
        : await likePost(postId);
      const toastMessage = isLiked ? "Post Disliked!" : "Post Liked!";
      toast.success(toastMessage);
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
      })
      .addCase(addUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Comment Added Successfully!");
      })
      .addCase(addUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(editUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Comment Edited Successfully!");
      })
      .addCase(editUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(deleteUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.allPosts = action.payload;
        toast.success("Comment Deleted Successfully!");
      })
      .addCase(deleteUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(likeDislikeUserPost.fulfilled, (state, action) => {
        state.getAllPostsStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(likeDislikeUserPost.rejected, (state) => {
        state.getAllPostsStatus = "rejected";
      });
  },
});

export const postReducer = postSlice.reducer;
