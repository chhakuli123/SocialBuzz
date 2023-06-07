import axios from "axios";

const getComments = (postId) => axios.get(`/api/comments/${postId}`);

const addComment = (postId, commentData) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const editComment = (postId, commentId, commentData) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: { authorization: localStorage.getItem("token") },
    }
  );

const deleteComment = (postId, commentId) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization: localStorage.getItem("token") },
  });

export { getComments, addComment, editComment, deleteComment };
