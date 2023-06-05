import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Post } from "./Post";
import { PostForm } from "./PostForm";

export const PostList = ({ posts }) => {
  const { allUsers } = useSelector((state) => state.user);

  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target) &&
        !event.target.classList.contains("more-vert-icon")
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 mb-12 lg:mr-[5rem]">
      <PostForm />
      {posts.map((post) => {
        const user = allUsers.find((user) => user.username === post.username);
        return (
          <Post
            key={post._id}
            post={post}
            user={user}
            allUsers={allUsers}
            handleOptionsClick={handleOptionsClick}
            optionsRef={optionsRef}
            showOptions={showOptions}
          />
        );
      })}
    </div>
  );
};
