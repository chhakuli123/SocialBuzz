import axios from "axios";

const getAllPostsFromServer = () => axios.get("/api/posts");

export { getAllPostsFromServer };
