import React from "react";

const ShimmerPostList = () => {
  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <div
          className="border border-gray-300 bg-white px-6 py-4 rounded-lg shadow-lg w-full mt-5 flex h-fit flex-col animate-pulse"
          key={index}
        >
          <div className="flex items-center flex-wrap mb-2">
            <div className="w-10 h-10 rounded-full mb-2 md:mb-0 md:mr-2 bg-gray-300"></div>
            <div className="relative ml-auto">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-300 h-4 rounded-lg w-2/3 mt-2"></div>
            <div className="bg-gray-300 h-4 rounded-lg w-1/2 mt-1"></div>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg mt-4"></div>
          <div className="bg-gray-300 h-6 rounded-lg mt-6 mb-6"></div>
        </div>
      ))}
    </div>
  );
};

export { ShimmerPostList };
