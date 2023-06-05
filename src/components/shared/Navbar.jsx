import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { GitHubIcon } from "asset";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-white text-deepBlue mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[5rem]">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              className="h-[4rem] w-[4rem] sm:w-[5rem] sm:h-[5rem]"
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685582243/SocialBuzz/SocialBuzzLogo_dsauhu.png"
              alt="SocialBuzz Logo"
            />
            <h1 className="font-bold ml-2 bg-gradient-to-r text-transparent bg-clip-text from-deepBlue to-customGreen text-2xl sm:text-4xl">
              SocialBuzz
            </h1>
          </div>
          <div className="flex items-center">
            {/* <span className="material-icons"><DarkModeOutlinedIcon style={{ fontSize: 40 }} /></span> */}
            <Link
              to="https://github.com/chhakuli123/SocialBuzz"
              target="_blank"
              className="github-icon cursor-pointer hover:text-customOrange"
            >
              <GitHubIcon style={{ fontSize: 35 }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
