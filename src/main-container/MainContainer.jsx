import React from "react";
import { FollowUserBar, Home, Navbar, Sidebar } from "components";

const MainContainer = () => {
  return (
    <div className="bg-customBg">
      <Navbar />
      <div className="flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 overflow-y-auto flex justify-center items-center">
            <Home />
          </div>
          <FollowUserBar />
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
