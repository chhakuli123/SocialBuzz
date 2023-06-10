import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "slices";
import { PostList } from "components";

const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  //posts from users other than the current user and whom the current user is not following.
  const explorePosts = allPosts?.filter(
    (post) =>
      post.username !== user.username &&
      !user.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );

  return (
    <div className="lg:w-1/2 w-full px-4 relative">
      {explorePosts?.length ? (
        <PostList posts={explorePosts}/>
      ) : (
        <p className="text-deepBlue text-2xl text-center font-semibold">
          No more posts available to explore!
        </p>
      )}
    </div>
  );
};
export { Explore };
