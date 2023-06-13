import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Post } from "./Post";
import { useOutsideClick } from "hooks";
import { getSortedPosts, sortOptions } from "utils";
import {
  ElderlyOutlinedIcon,
  NewReleasesRoundedIcon,
  TuneIcon,
  WhatshotRoundedIcon,
} from "asset";

const PostList = ({ posts }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortByOption, setSortByOption] = useState("Latest");

  const { allUsers } = useSelector((state) => state.user);
  const domNode = useOutsideClick(() => setShowSortOptions(false));

  const sortedPosts = getSortedPosts(posts, sortByOption);

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col w-full py-2">
        <span className="flex justify-between items-center py-1">
          <p className="text-deepBlue text-2xl text-center font-semibold">
            {sortOptions[sortByOption]}
          </p>
          <div className="flex flex-col relative" ref={domNode}>
            <TuneIcon
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              onClick={() => setShowSortOptions(!showSortOptions)}
            />
            <ul
              className={`bg-white rounded-lg px-1.5 py-1 w-[7rem] text-center absolute top-8 z-10 right-0 border-2 shadow-xl cursor-pointer text-deepBlue font-semibold ${
                showSortOptions ? "block" : "hidden"
              }`}
            >
              <li
                className={`hover:bg-activeGreen rounded-lg  px-6 flex justify-center items-center ${
                  sortByOption === "Latest" ? "bg-activeGreen" : ""
                }`}
                onClick={() => setSortByOption("Latest")}
              >
                <NewReleasesRoundedIcon
                  style={{ fontSize: "1.2rem", marginRight: "5px" }}
                />
                Latest
              </li>
              <li
                className={`hover:bg-activeGreen rounded-lg flex justify-center items-center ${
                  sortByOption === "Oldest" ? "bg-activeGreen" : ""
                }`}
                onClick={() => setSortByOption("Oldest")}
              >
                <ElderlyOutlinedIcon
                  style={{ fontSize: "1.2rem", marginRight: "5px" }}
                />
                Oldest
              </li>
              <li
                className={`hover:bg-activeGreen rounded-lg px-6 flex justify-center items-center ${
                  sortByOption === "Trending" ? "bg-activeGreen" : ""
                }`}
                onClick={() => setSortByOption("Trending")}
              >
                <WhatshotRoundedIcon
                  style={{ fontSize: "1.2rem", marginRight: "5px" }}
                />
                Trending
              </li>
            </ul>
          </div>
        </span>
      </div>

      {sortedPosts.map((post) => {
        return <Post key={post._id} post={post} allUsers={allUsers} />;
      })}
    </div>
  );
};
export { PostList };
