import React from "react";
import { useSelector } from "react-redux";

import { Post } from "./Post";
import { PostForm } from "./PostForm";

const PostList = ({ posts }) => {
  const { allUsers } = useSelector((state) => state.user);

  // Sort posts by createdAt in descending order
  const sortedPosts = posts
    ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];
    
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 mb-12 lg:mr-[5rem]">
      <PostForm />
      {sortedPosts.map((post) => {
        const user = allUsers.find((user) => user.username === post.username);
        return (
          <Post key={post._id} post={post} user={user} allUsers={allUsers} />
        );
      })}
    </div>
  );
};
export { PostList };
