import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { InputField } from "./InputFeild";
import { validateSignupForm } from "./formValidation";
import { signupUser } from "../authSlice";

const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    passwordMatch: true,
    hide: { password: true, confirmPassword: true },
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupFormSubmitHandler = async (event) => {
    event.preventDefault();
    const { isValid, errors } = validateSignupForm(userDetails);

    if (isValid) {
      const response = await dispatch(signupUser(userDetails));
      if (response?.payload.encodedToken) {
        navigate("/");
      }
    } else {
      setUserDetails((prevState) => ({
        ...prevState,
        errors,
      }));
    }
  };

  const handleInputFocus = (field) => {
    setUserDetails((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [field]: "",
      },
    }));
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
        <form onSubmit={signupFormSubmitHandler} className="form">
          <h2 className="flex justify-center text-4xl font-bold mb-4">
            Sign Up
          </h2>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                id="firstName"
                label="First Name:"
                type="text"
                value={userDetails.firstName}
                onChange={(event) =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    firstName: event.target.value,
                  }))
                }
                onFocus={() => handleInputFocus("firstName")}
                error={userDetails.errors.firstName}
              />
            </div>

            <div className="w-1/2">
              <InputField
                id="lastName"
                label="Last Name:"
                type="text"
                value={userDetails.lastName}
                onChange={(event) =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    lastName: event.target.value,
                  }))
                }
                onFocus={() => handleInputFocus("lastName")}
                error={userDetails.errors.lastName}
              />
            </div>
          </div>

          <InputField
            id="email"
            label="Email:"
            type="email"
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails((prevState) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            onFocus={() => handleInputFocus("email")}
            error={userDetails.errors.email}
          />
          
          <InputField
            id="username"
            label="Username:"
            type="text"
            value={userDetails.username}
            onChange={(event) =>
              setUserDetails((prevState) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
            onFocus={() => handleInputFocus("username")}
            error={userDetails.errors.username}
          />

          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                id="password"
                label="Password:"
                type={userDetails.hide.password ? "password" : "text"}
                value={userDetails.password}
                onChange={(event) =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }))
                }
                onFocus={() => handleInputFocus("password")}
                error={userDetails.errors.password}
                toggleHide={() =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    hide: {
                      ...prevState.hide,
                      password: !prevState.hide.password,
                    },
                  }))
                }
                hidePassword={userDetails.hide.password}
              />
            </div>

            <div className="w-1/2">
              <InputField
                id="confirmPassword"
                label="Confirm Password:"
                type={userDetails.hide.confirmPassword ? "password" : "text"}
                value={userDetails.confirmPassword}
                onChange={(event) =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    confirmPassword: event.target.value,
                    passwordMatch: event.target.value === prevState.password,
                  }))
                }
                onFocus={() => handleInputFocus("confirmPassword")}
                error={userDetails.errors.confirmPassword}
                toggleHide={() =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    hide: {
                      ...prevState.hide,
                      confirmPassword: !prevState.hide.confirmPassword,
                    },
                  }))
                }
                hidePassword={userDetails.hide.confirmPassword}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-customGreen text-white rounded-md hover:bg-deepBlue"
          >
            SIGN UP
          </button>

          <div className="form__footer flex items-center mt-2 text-md text-deepBlue">
            <span className="form__footer-text">Already have an account?</span>
            <Link to="/login" className="text-customGreen underline ml-1" replace>
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignupForm };
