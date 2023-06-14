import React from "react";
import { Outlet } from "react-router-dom";

import { FollowUserBar, Navbar, SearchBar, Sidebar } from "components";

const MainContainer = () => {
  return (
    <div className="bg-customBg min-h-screen flex flex-col">
      <Navbar />
      <div className="sm:hidden">
        <SearchBar />
      </div>
      <div className="flex flex-grow mt-6 mb-14 sm:mb-0">
        <Sidebar />
          <Outlet/>
        <FollowUserBar />
      </div>
    </div>
  );
};

export { MainContainer };
