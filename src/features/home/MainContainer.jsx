import React from "react";

import { FilterButtons, Navbar, SearchBar, Sidebar } from "components";

const MainContainer = () => {
  return (
    <div className="bg-customBg h-screen">
      <Navbar/>
    <div className="flex max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      <Sidebar />
      
      <div className="flex-1 bg-white m-5">
        <h1>I am main</h1>  
      </div>

      <div className="mt-5 w-80">
        <SearchBar /> 
        <FilterButtons/>
      </div>
    </div>
    </div>
  );
};

export { MainContainer };
