import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  MoreHorizIcon,
  PersonOutlineIcon,
  RocketOutlinedIcon,
} from "asset";
import { logout } from "slices";
import { PostModal } from "components";
import { useOutsideClick } from "hooks";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const domNode = useOutsideClick(() => setShowOptions(false));

  const isActiveClass = ({ isActive }) =>
    `flex items-center text-lg mt-1 py-1.5 rounded-3xl px-4 hover:bg-activeGreen w-full cursor-pointer ${
      isActive && "bg-activeGreen font-semibold text-deepBlue"
    }`;

  return (
    <>
      <aside className="hidden lg:flex xl:w-1/4 px-6 md:flex flex-col height-90vh">
        <div className="sticky top-24">
          <ul className="menu flex flex-col ml-3">
            <li className="menu-item">
              <NavLink exact="true" to="/" className={isActiveClass}>
                <HomeOutlinedIcon style={{ fontSize: 30 }} className="mr-4" />
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink exact="true" to="/explore" className={isActiveClass}>
                <RocketOutlinedIcon style={{ fontSize: 30 }} className="mr-4" />
                Explore
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink exact="true" to="/bookmarks" className={isActiveClass}>
                <BookmarkBorderOutlinedIcon
                  style={{ fontSize: 30 }}
                  className="mr-4"
                />
                Bookmarks
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink exact="true" to="/liked-posts" className={isActiveClass}>
                <FavoriteBorderOutlinedIcon
                  style={{ fontSize: 30 }}
                  className="mr-4"
                />
                Liked Posts
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                exact="true"
                to="/user-profile"
                className={isActiveClass}
              >
                <PersonOutlineIcon style={{ fontSize: 32 }} className="mr-4" />
                Profile
              </NavLink>
            </li>
            <li className="menu-item mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-deepBlue w-full flex justify-center text-xl items-center py-2 px-5 text-white rounded-full"
              >
                <AddCircleOutlineOutlinedIcon
                  style={{ fontSize: 30 }}
                  className="mr-4"
                />
                New Post
              </button>
            </li>
            <li className="menu-item">
              <div
                className="flex flex-col justify-center items-center sm:flex-row sm:items-center w-full mt-72"
                ref={domNode}
              >
                <div
                  className="flex px-1 w-full justify-between py-2 cursor-pointer"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      {user.avatarUrl ? (
                        <img
                          src={user?.avatarUrl}
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="ml-2 text-left">
                      <p className="text-lg font-medium">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-sm text-gray-500">@{user?.username}</p>
                    </div>
                  </div>

                  <span className="ml-14">
                    <MoreHorizIcon style={{ fontSize: 24 }} />
                  </span>
                </div>
                {showOptions && (
                  <div className="absolute bottom-20 right-0 font-bold bg-white shadow-xl border">
                    <div className="relative">
                      <ul className="py-2">
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-activeGreen"
                          onClick={() => navigate("/user-profile")}
                        >
                          <PersonOutlineIcon className="mr-2" />
                          Go to Profile
                        </li>
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-activeGreen"
                          onClick={() => {
                            dispatch(logout());
                            toast.success("Logged Out!");
                          }}
                        >
                          <LogoutIcon className="mr-2" />
                          Log Out @{user?.username}
                        </li>
                      </ul>
                      <div className="absolute w-4 h-4 bg-white top-full left-[7rem] transform rotate-45 translate-x-1/2 -translate-y-2"></div>
                    </div>
                  </div>
                )}
              </div>
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
          onClick={() => navigate("/user-profile")}
          className="flex flex-col items-center"
        >
          <PersonOutlineIcon style={{ fontSize: 35 }} className="text-white" />
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
