import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "slices";
import { PostList } from "./PostList";
import { PostForm } from "./PostForm";

const Home = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // posts from the current user or posts from users whom the current user is following.
  const homePosts = allPosts?.filter(
    (post) =>
      post?.username === user?.username ||
      user?.following?.find(
        (followingUser) => followingUser?.username === post?.username
      )
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <PostForm />
      {homePosts?.length ? (
        <PostList posts={homePosts} />
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          Follow users to see their posts here!
        </p>
      )}
    </div>
  );
};

export { Home };
