import axios from "axios";

export const getAllUsers = () => axios.get("/api/users");

export const getBookmarks = () =>
  axios.get(`/api/users/bookmark`, {
    headers: { authorization: localStorage.getItem("token") },
  });

export const bookmarkPost = (postId) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

export const unBookmarkPost = (postId) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );
