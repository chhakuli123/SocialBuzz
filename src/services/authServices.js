import axios from "axios";

const loginService = (userDetails) =>
  axios.post("/api/auth/login", {
    username: userDetails.username,
    password: userDetails.password,
  });

const signUpService = (userDetails) =>
  axios.post("/api/auth/signup", {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    username: userDetails.username,
    password: userDetails.password,
  });
export { loginService, signUpService };
