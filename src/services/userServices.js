import axios from "axios";

const getAllUsers = () => axios.get("/api/users");

const getUserByUsername = (username) => axios.get(`/api/users/${username}`);

const editUserData = (userData) =>
  axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const getBookmarks = () =>
  axios.get(`/api/users/bookmark`, {
    headers: { authorization: localStorage.getItem("token") },
  });

const bookmarkPost = (postId) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const unBookmarkPost = (postId) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const followUser = (followUserId) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const unFollowUser = (followUserId) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

export {
  getAllUsers,
  getUserByUsername,
  editUserData,
  getBookmarks,
  bookmarkPost,
  unBookmarkPost,
  followUser,
  unFollowUser,
};
