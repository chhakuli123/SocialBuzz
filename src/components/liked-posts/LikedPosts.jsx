import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PostList } from "components";

const LikedPosts = () => {
  const [postsLikedByUser, setPostsLikedByUser] = useState([]);

  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const likedPosts = allPosts.filter((currPost) =>
      currPost.likes.likedBy.find(
        (currUser) => currUser.username === user?.username
      )
    );
    setPostsLikedByUser(likedPosts);
  }, [allPosts, user]);

  return (
    <div className="lg:w-1/2 w-full px-4 relative">
      <p className="font-semibold text-2xl text-deepBlue mb-2">Liked Posts</p>
      {postsLikedByUser.length !== 0 ? (
        <PostList posts={postsLikedByUser} />
      ) : (
        <p className="text-deepBlue text-2xl text-center font-semibold">
          No Liked Posts Yet!
        </p>
      )}
    </div>
  );
};

export { LikedPosts };
