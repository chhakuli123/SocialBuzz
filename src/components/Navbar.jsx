import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import logo from "../asset/socialbuzz.png";
import { GitHubIcon } from "asset";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="max-w-[90rem] text-deepBlue mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[5rem]">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              className="h-[4rem] w-[4rem] sm:w-[5rem] sm:h-[5rem]"
              src={logo}
              alt="SocialBuzz Logo"
            />
            <h1 className="font-bold ml-2 text-2xl sm:text-4xl">
              Social<span className="text-customOrange">Buzz</span>
            </h1>
          </div>
          <div className="flex items-center">
            {/* <span className="material-icons"><DarkModeOutlinedIcon style={{ fontSize: 40 }} /></span> */}
            <Link
              to="https://github.com/chhakuli123/SocialBuzz"
              target="_blank"
              className="github-icon cursor-pointer hover:text-customOrange"
            >
              <GitHubIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
