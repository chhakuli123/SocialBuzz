import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchOutlinedIcon } from "asset";
import { fetchAllUsers } from "slices";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredResults = allUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredResults);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredUsers([]);
  };

  return (
    <div className="ml-4 mr-10 mt-3">
    <div className="relative">
      <div className="p-4 flex items-center bg-white rounded-t-md shadow-md">
        <input
          className="w-full bg-transparent border-none focus:outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="flex items-center justify-center ml-2">
          <SearchOutlinedIcon />
        </button>
      </div>
      {filteredUsers.length > 0 && searchTerm.length > 0 ? (
        <div className="absolute top-full left-0 cursor-pointer right-0 bg-white rounded-b-md shadow-md ">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="p-2 flex items-center border-b border-gray-200"
            >
              <img
                src={user.avatarUrl}
                alt={user.firstName}
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-medium">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-400">@{user.username}</p>
              </div>
            </div>
          ))}
          <div className="p-2 flex justify-end">
            <button
              className="text-white rounded-md p-1 font-semibold bg-customGreen hover:bg-green-600"
              onClick={clearSearch}
            >
              Clear Search
            </button>
          </div>
        </div>
      ) : (
        searchTerm.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white rounded-b-md shadow-md">
            <div className="p-2">
              <p className="font-medium text-xl flex justify-center">🕵️‍♀️ User not found</p>
            </div>
            <div className="p-2 flex justify-center">
              <button
                className="text-white rounded-md p-1 font-semibold bg-customGreen hover:bg-green-600 mb-2"
                onClick={clearSearch}
              >
                Clear Search
              </button>
            </div>
          </div>
        )
      )}
    </div>
    </div>
  );
};

export { SearchBar };
