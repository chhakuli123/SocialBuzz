import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  AddCircleOutlineOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  HistoryEduIcon,
  HomeOutlinedIcon,
  LogoutIcon,
  RocketOutlinedIcon,
} from "asset";
import { logout } from "slices";
import { PostModal } from "components";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActiveClass = ({ isActive }) =>
    `flex items-center text-xl mt-2 py-1.5 rounded-3xl px-4 hover:activeGreen w-full cursor-pointer ${
      isActive && "bg-activeGreen font-semibold text-deepBlue"
    }`;

  return (
    <>
      <aside className="hidden lg:flex xl:w-1/4 px-6 md:flex flex-col height-90vh">
      <div className="sticky top-24">

        <ul className="menu flex flex-col ml-3">
          <li className="menu-item">
            <NavLink exact="true" to="/" className={isActiveClass}>
              <HomeOutlinedIcon style={{ fontSize: 32 }} className="mr-4" />
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink exact="true" to="/explore" className={isActiveClass}>
              <RocketOutlinedIcon style={{ fontSize: 32 }} className="mr-4" />
              Explore
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink exact="true" to="/bookmarks" className={isActiveClass}>
              <BookmarkBorderOutlinedIcon
                style={{ fontSize: 32 }}
                className="mr-4"
              />
              Bookmarks
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink exact="true" to="/liked-posts" className={isActiveClass}>
              <FavoriteBorderOutlinedIcon
                style={{ fontSize: 32 }}
                className="mr-4"
              />
              Liked Posts
            </NavLink>
          </li>
          <li
            className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:actieGreen w-full text-xl cursor-pointer"
            onClick={() => {
              dispatch(logout());
              toast.success("Logged Out!");
            }}
          >
            <LogoutIcon style={{ fontSize: 32 }} className="mr-4" />
            Log Out
          </li>

          <li className="menu-item mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-customGreen hover:bg-green-600 w-full flex justify-center text-xl items-center py-2 px-5 text-white rounded"
            >
              <AddCircleOutlineOutlinedIcon
                style={{ fontSize: 32 }}
                className="mr-4"
              />
              New Post
            </button>
          </li>
        </ul>
        </div>
      </aside>
      {/* -------------------- MenuBar For Mobile -------------------------- */}

      <div className="menu md:hidden fixed bottom-0 z-30 inset-x-0 bg-deepBlue text-customOrange flex justify-between px-4 py-3">
        <span
          onClick={() => navigate("/")}
          className="flex flex-col items-center"
        >
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
          onClick={() => {
            dispatch(logout());
            toast.success("Logged Out!");
          }}
          className="flex flex-col items-center"
        >
          <LogoutIcon style={{ fontSize: 35 }} className="text-white" />
        </span>
      </div>

      {/* Position the HistoryEduIcon above the right corner */}
      <div className="md:hidden fixed bottom-16 z-30 right-0 mb-4 mr-2">
        <div className="bg-customGreen rounded-full w-12 h-12 flex items-center justify-center">
          <span
            onClick={() => setIsModalOpen(true)}
            className="text-white text-3xl"
          >
            <HistoryEduIcon style={{ fontSize: 35 }} className="text-white" />
          </span>
        </div>
      </div>
      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}

    </>
  );
};

export { Sidebar };
