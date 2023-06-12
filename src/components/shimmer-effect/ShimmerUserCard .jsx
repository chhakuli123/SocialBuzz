import React from "react";

const ShimmerUserCard = () => {
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <div className="flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-2 py-2">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="flex flex-col">
              <div className="bg-gray-300 h-4 w-24"></div>
              <div className="bg-gray-300 h-2 w-16 mt-1"></div>
            </div>
          </div>
          <div className="flex items-center font-semibold text-white bg-gray-300 rounded-2xl px-2 py-1">
            <div className="mr-1">+</div>
            <div>Follow</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ShimmerUserCard };
