import React from "react";
import { Outlet } from "react-router-dom";

import { FollowUserBar, Navbar, Sidebar } from "components";

const MainContainer = () => {
  return (
    <div className="bg-customBg">
      <Navbar />
      <div className="flex mt-6 mb-14 sm:mb-0">
          <Sidebar />
          <Outlet />
          <FollowUserBar />
      </div>
    </div>
  );
};

export { MainContainer };
