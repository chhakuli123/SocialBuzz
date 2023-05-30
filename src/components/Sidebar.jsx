import {
  AddCircleOutlineOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  HistoryEduIcon,
  HomeOutlinedIcon,
  LogoutIcon,
  RocketOutlinedIcon,
} from "asset";
import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const isActiveClass = ({ isActive }) =>
    `flex items-center py-4 px-4 rounded-l w-full cursor-pointer ${
      isActive && "py-[0.6rem] px-4  bg-deepBlue text-white"
    }`;
  return (
    <aside className="sidebar text-deepBlue text-2xl font-medium mt-5 cursor-pointer">
      <ul className="menu hidden sm:flex flex-col">
        <li className="menu-item">
          <NavLink exact="true" to="/" className={isActiveClass}>
            <HomeOutlinedIcon style={{ fontSize: 35 }} className="mr-4" />
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink exact="true" to="/explore" className={isActiveClass}>
            <RocketOutlinedIcon style={{ fontSize: 35 }} className="mr-4" />
            Explore
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink exact="true" to="/bookmarks" className={isActiveClass}>
            <BookmarkBorderOutlinedIcon
              style={{ fontSize: 35 }}
              className="mr-4"
            />
            Bookmarks
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink exact="true" to="/liked-posts" className={isActiveClass}>
            <FavoriteBorderOutlinedIcon
              style={{ fontSize: 35 }}
              className="mr-4"
            />
            Liked Posts
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink exact="true" to="/logout" className={isActiveClass}>
            <LogoutIcon style={{ fontSize: 35 }} className="mr-4" />
            Log Out
          </NavLink>
        </li>

        <li className="menu-item mt-10">
          <button
            onClick={() => navigate("/create-post")}
            className="bg-customOrange w-full flex items-center py-2 px-4 text-white  rounded"
          >
            <AddCircleOutlineOutlinedIcon
              style={{ fontSize: 35 }}
              className="mr-4"
            />
            New Post
          </button>
        </li>
      </ul>
      {/* -------------------- MenuBar For Mobile -------------------------- */}
      <div className="menu sm:hidden fixed bottom-0 inset-x-0 bg-deepBlue text-customOrange flex justify-between px-4 py-3">
       <span  onClick={() => navigate("/explore")} className="flex flex-col items-center">
          <HomeOutlinedIcon style={{ fontSize: 35 }} className="text-white" />
        </span>
        <span
          onClick={() => navigate("/explore")}
          className="flex flex-col items-center"
        >
          <RocketOutlinedIcon style={{ fontSize: 35 }} className="text-white" />
        </span>
        <span
          onClick={() => navigate("/bookmarks")}
          className="flex flex-col items-center"
        >
          <BookmarkBorderOutlinedIcon
            style={{ fontSize: 35 }}
            className="text-white"
          />
        </span>
        <span
          onClick={() => navigate("/liked-posts")}
          className="flex flex-col items-center"
        >
          <FavoriteBorderOutlinedIcon
            style={{ fontSize: 35 }}
            className="text-white"
          />
        </span>

        <span
          onClick={() => navigate("/")}
          className="flex flex-col items-cente"
        >
          <LogoutIcon style={{ fontSize: 35 }} className="text-white" />
        </span>
      </div>
      {/* Position the HistoryEduIcon above the right corner */}
      <div className="absolute sm:hidden bottom-0 right-0 mb-[4.8rem] mr-[0.2rem] bg-customOrange rounded-full w-12 h-12 flex items-center justify-center">
        <span
          onClick={() => navigate("/create-post")}
          className="text-white text-3xl"
        >
          <HistoryEduIcon style={{ fontSize: 35 }} className="text-white" />
        </span>
      </div>
    </aside>
  );
};

export { Sidebar };
