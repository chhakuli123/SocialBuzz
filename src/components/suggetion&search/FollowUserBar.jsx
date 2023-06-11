import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchAllUsers } from "slices";
import { SearchBar } from "./SearchBar";

const FollowUserBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const followData = allUsers
    ?.filter((currentUser) => currentUser?._id !== user?._id)
    .filter(
      (currentUser) =>
        !user?.following?.find(
          (followingUser) => followingUser?._id === currentUser?._id
        )
    )
    .slice(0, 4);

  const handleNavigate = (username) => {
    user.username === username
      ? navigate("/user-profile")
      : navigate(`/profile/${username}`);
  };

  return (
    <div className="w-1/3 hidden lg:flex lg:flex-col">
      <div className="sticky top-24">
        <SearchBar />
        <div className="ml-4 mr-10 bg-white px-4 py-4 my-4 border rounded-lg shadow-lg flex h-fit flex-col gap-6">
          <p className="font-semibold">Who to follow?</p>
          {followData.length === 0 ? (
            <div className="text-center">No Suggestions</div>
          ) : (
            followData.map((user) => (
              <div
                className="flex items-center justify-between"
                key={user?._id}
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="avatar"
                    className="w-12 h-12 rounded-full cursor-pointer"
                    src={user?.avatarUrl}
                    onClick={() => handleNavigate(user?.username)}
                  />
                  <div
                    className="flex flex-col"
                    onClick={() => handleNavigate(user?.username)}
                  >
                    <p className="font-semibold cursor-pointer">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-sm text-gray-400">@{user?.username}</p>
                  </div>
                </div>
                <button className="flex items-center font-semibold text-white bg-deepBlue rounded-2xl px-2 py-1 ">
                  <span className="mr-1">+</span>
                  <p>Follow</p>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { FollowUserBar };
