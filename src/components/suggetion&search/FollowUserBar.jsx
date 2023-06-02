import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllUsers } from 'slices';
import { SearchBar } from './SearchBar';

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
      <div className="py-4 w-full hidden lg:flex lg:flex-col sticky top-8 height-90vh">
        <SearchBar />
        <div className=" w-full  mr-10 bg-white px-6 py-4 my-6 border rounded-lg shadow-lg  flex h-fit flex-col gap-6">
          <p className="font-semibold">Whome to follow?</p>
          {followData.length === 0 ? (
            <div className="text-center">No Suggestions</div>
          ) : (
            followData.map((user) => (
                <div className="flex gap-6 justify-between items-start" key={user._id}>
                  <div className="flex gap-4">
                    <img
                      alt="avatar"
                      className="rounded-full self-center cursor-pointer h-12 w-12"
                      src={user.avatarUrl}
                    />
                    <div className="flex flex-col">
                      <p
                        className="font-semibold cursor-pointer"
                      >
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-gray-400">@{user.username}</p>
                    </div>
                  </div>
                  <button className="font-semibold cursor-pointer text-white bg-customGreen rounded-2xl px-2 py-1 hover:bg-customGreen-400 flex hover:bg-green-600">
                    <span className="mr-1">+</span>
                    <p>Follow</p>
                  </button>
                </div>              
            ))
          )}
        </div>
      </div>
    );
}

export  {FollowUserBar}
