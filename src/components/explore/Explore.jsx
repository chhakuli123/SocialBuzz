import { PostList } from "components/home/PostList";
import React from "react";
import { useSelector } from "react-redux";

const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  //posts from users other than the current user and whom the current user is not following.
  const explorePosts = allPosts?.filter(
    (post) =>
      post.username !== user.username &&
      !user.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      {explorePosts.length !== 0 ? (
        <PostList posts={explorePosts} user={user} />
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          No more posts available to explore!
        </p>
      )}
    </div>
  );
};
export { Explore };
