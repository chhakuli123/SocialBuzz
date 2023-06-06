import axios from "axios";

const getAllPostsFromServer = () => axios.get("/api/posts");

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

export { getAllPostsFromServer, addPost, deletePost, editPost };
