import { SearchOutlinedIcon } from 'asset';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-4 flex items-center bg-white rounded-md shadow-md">
      <input
        className="w-full bg-transparent border-none focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <button className="flex items-center justify-center ml-2">
        <SearchOutlinedIcon />
      </button>
    </div>
  );
};

export { SearchBar };
