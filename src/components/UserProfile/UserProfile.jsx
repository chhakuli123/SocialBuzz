import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PostList, ShimmerPostList, UserDetails } from "components";
import { fetchUserPosts } from "slices";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { userPosts } = useSelector((state) => state.post);
  const { allPosts, getUserPostsStatus } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPosts(user?.username));
  }, [dispatch, allPosts, user?.username]);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-4">Profile</p>
      {user?.username && (
        <>
          <UserDetails
            user={user}
            showEditButton
            postLength={userPosts.length}
          />
          {getUserPostsStatus === "pending" ? (
            <ShimmerPostList />
          ): userPosts.length > 0 ? (
            <PostList posts={userPosts} />
          ) : (
            <p className="text-deepBlue text-2xl text-center font-semibold mt-5">Add some cool posts!</p>
          )}
        </>
      )}
    </div>
  );
};

export { UserProfile };
