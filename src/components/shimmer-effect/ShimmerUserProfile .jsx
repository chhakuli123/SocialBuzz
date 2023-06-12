import React from "react";

const ShimmerUserProfile = () => {
  return (
    <div className="bg-white px-6 py-5 gap-4 border rounded-lg shadow-lg flex h-fit sm:gap-6 mb-2 animate-pulse">
      <div className="h-16 w-[4.5rem] rounded-full bg-gray-300"></div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <div>
            <div className="bg-gray-300 h-5 w-36 mb-3"></div>
            <div className="bg-gray-300 h-4 w-20 mb-2"></div>
          </div>
          <div className="bg-gray-300 h-8 w-20 rounded-full"></div>
        </div>
        <div className="bg-gray-300 h-4 w-80"></div>
        <div className="bg-gray-300 h-4 w-60 mt-1 mb-3"></div>
        <div className="flex gap-8">
          <div className="bg-gray-300 h-4 w-14"></div>
          <div className="bg-gray-300 h-4 w-20"></div>
          <div className="bg-gray-300 h-4 w-20"></div>
        </div>
        <div className="bg-gray-300 h-4 w-36 mt-1"></div>
      </div>
    </div>
  );
};
export { ShimmerUserProfile };
