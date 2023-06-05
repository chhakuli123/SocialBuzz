import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllUsers } from "slices";
import { SearchBar } from "./SearchBar";

const FollowUserBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const followData = allUsers
    ?.filter((currentUser) => currentUser.username !== user.username)
    .filter(
      (currentUser) =>
        !user.following.find(
          (followingUser) => followingUser._id === currentUser._id
        )
    )
    .slice(0, 4);

  return (
    <div className="hidden lg:block fixed top-15 right-8 mt-7 w-96">
      <SearchBar />
      <div className="mt-4 p-4 bg-white border rounded-lg shadow-lg">
        <p className="font-semibold">Whom to follow?</p>
        {followData.length === 0 ? (
          <div className="text-center">No Suggestions</div>
        ) : (
          followData.map((user) => (
            <div
              className="flex items-center justify-between mt-4"
              key={user._id}
            >
              <div className="flex items-center gap-4">
                <img
                  alt="avatar"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={user.avatarUrl}
                />
                <div className="flex flex-col">
                  <p className="font-semibold cursor-pointer">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-gray-400">@{user.username}</p>
                </div>
              </div>
              <button className="flex items-center font-semibold text-white bg-customGreen rounded-2xl px-2 py-1 hover:bg-green-600">
                <span className="mr-1">+</span>
                <p>Follow</p>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { FollowUserBar };
