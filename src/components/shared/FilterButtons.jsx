import React from 'react';
import { NewReleasesRoundedIcon, WhatshotRoundedIcon } from 'asset';

const FilterButtons = () => {
  return (
    <div className="flex justify-between mt-4 font-bold text-deepBlue hover:text-blue-700">
      <button className="flex justify-center border border-gray-300 rounded-md w-[9rem] p-2">
        <WhatshotRoundedIcon className="text-xl" />
        <span className="ml-2">Trending</span>
      </button>
      <button className="flex justify-center border border-gray-300 rounded-md w-[9rem] p-2">
        <NewReleasesRoundedIcon className="text-xl" />
        <span className="ml-2">Latest</span>
      </button>
    </div>
  );
};

export { FilterButtons };
