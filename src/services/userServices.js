import axios from "axios";

export const getAllUsers = () => axios.get("/api/users");
