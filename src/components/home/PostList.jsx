import React from "react";
import { useSelector } from "react-redux";

import { Post } from "./Post";

const PostList = ({ posts }) => {
  const { allUsers } = useSelector((state) => state.user);

  // Sort posts by createdAt in descending order
  const sortedPosts = posts
    ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <div className="flex flex-col items-center relative">
      {sortedPosts.map((post) => {
        return (
          <Post key={post._id} post={post} allUsers={allUsers} />
        );
      })}
    </div>
  );
};
export { PostList };
