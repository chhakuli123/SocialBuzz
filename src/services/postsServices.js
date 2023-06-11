import axios from "axios";

const getAllPostsFromServer = () => axios.get("/api/posts");

export const getPostsByUserName = (username) =>
  axios.get(`/api/posts/user/${username}`);

const addPost = (postData) => {
  return axios.post(
    "/api/posts",
    { postData },
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );
};

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editPost = (postData) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const likePost = (postId) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const dislikePost = (postId) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

export {
  getAllPostsFromServer,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
};
