import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { InputField } from "./InputFeild";
import { loginUser } from "../authSlice";

const LoginForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
    hidePassword: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();

    if (userLoginDetails.username && userLoginDetails.password !== "") {
      const response = await dispatch(loginUser(userLoginDetails));
      if (response?.payload.encodedToken) {
        navigate("/");
      }
    } else {
      toast.error("Please enter valid details");
    }
  };

  const handlePasswordToggle = () => {
    setUserLoginDetails((prevState) => ({
      ...prevState,
      hidePassword: !prevState.hidePassword,
    }));
  };

  const loginAsGuestHandler = async () => {
    const guestUserDetails = {
      username: "chhakulizingare",
      password: "chhakuli@123",
    };
    setUserLoginDetails(guestUserDetails);

    const response = await dispatch(loginUser(guestUserDetails));
    if (response?.payload.encodedToken) {
      navigate("/");
    } else {
      toast.error("Please enter valid details");
    }
  };

  return (
    <div className="flex justify-around items-center min-h-screen">
      <div className="hidden sm:block">
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685577037/SocialBuzz/undraw_mobile_encryption_re_yw3o_udhh26.svg"
          alt="Logo"
          className="w-[50rem] h-[40rem]"
        />
      </div>
      
      <div className="max-w-md w-full p-6 shadow-xl hover:shadow-2xl border-2 sm:0 m-4">
          <div className="flex justify-center items-center cursor-pointer mb-2">
            <img
              className="h-[4rem] w-[4rem] sm:w-[5rem] sm:h-[5rem]"
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685582243/SocialBuzz/SocialBuzzLogo_dsauhu.png"
              alt="SocialBuzz Logo"
            />
            <h1 className="font-bold ml-2 bg-gradient-to-r text-transparent bg-clip-text from-deepBlue to-customGreen text-2xl sm:text-4xl">
              SocialBuzz
            </h1>
          </div>
        <h2 className="flex justify-center text-4xl font-semibold mb-4">Login</h2>
        <form onSubmit={loginFormSubmitHandler}>
          <InputField
            label="Username"
            type="text"
            id="username"
            value={userLoginDetails.username}
            onChange={(event) =>
              setUserLoginDetails({
                ...userLoginDetails,
                username: event.target.value,
              })
            }
          />
          <InputField
            label="Password"
            type={userLoginDetails.hidePassword ? "password" : "text"}
            id="password"
            value={userLoginDetails.password}
            onChange={(event) =>
              setUserLoginDetails({
                ...userLoginDetails,
                password: event.target.value,
              })
            }
            toggleHide={handlePasswordToggle}
            hidePassword={userLoginDetails.hidePassword}
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-customGreen text-white rounded-md hover:bg-deepBlue"
          >
            LOGIN
          </button>
          <button
            type="button"
            onClick={loginAsGuestHandler}
            className="w-full py-2 mt-2 text-md border border-deepBlue rounded-md "
          >
            LOGIN AS GUEST
          </button>
          <div className="flex items-center mt-2 text-md text-deepBlue">
            <span className="mr-1">Don't have an account?</span>
            <Link
              to="/signup"
              className="text-customGreen underline ml-1"
              replace
            >
              Create One
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginForm };
