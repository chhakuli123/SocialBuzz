import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DarkModeOutlinedIcon, GitHubIcon, LightModeOutlinedIcon } from "asset";
import { toggleTheme } from "slices";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="sticky top-0 z-30 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[4rem] sm:h-[5rem]">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            {theme === "light" ? (
               <img
               className="h-[3rem] w-[3rem] sm:w-[4rem] sm:h-[4rem]"
               src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685675297/SocialBuzz/SocialBuzzLogo-removebg-preview_qw2mcu.png"
               alt="SocialBuzz Logo"
             />
            ) : (
              <img
                className="h-[3rem] w-[3rem] sm:w-[4rem] sm:h-[4rem]"
                src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686667152/SocialBuzz/pokrsqws7iecde7no8kq.png"
                alt="SocialBuzz Logo"
              />
            )}
            <h1 className="logo-name font-bold ml-2 bg-gradient-to-r text-transparent bg-clip-text from-deepBlue to-customGreen text-2xl sm:text-4xl">
              SocialBuzz
            </h1>
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="material-icons mr-4" onClick={handleThemeToggle}>
              {theme === "dark" ? (
                <LightModeOutlinedIcon style={{ fontSize: 35 }} />
              ) : (
                <DarkModeOutlinedIcon style={{ fontSize: 35 }} />
              )}
            </span>
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
