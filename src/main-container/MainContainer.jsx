import React from "react";
import { FollowUserBar, Navbar, Sidebar } from "components";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="bg-customBg">
      <Navbar />
      <div className="flex mt-6 mb-14">
          <Sidebar />
          <Outlet />
          <FollowUserBar />
      </div>
    </div>
  );
};

export { MainContainer };
