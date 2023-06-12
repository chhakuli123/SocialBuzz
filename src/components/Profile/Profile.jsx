import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  PostList,
  ShimmerPostList,
  ShimmerUserProfile,
  UserDetails,
} from "components";
import { fetchUserDetails, fetchUserPosts } from "slices";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  const { userPosts } = useSelector((state) => state.post);
  const { userDetails, allUsers, userDetailsStatus } = useSelector(
    (state) => state.user
  );
  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchUserDetails(username));
    dispatch(fetchUserPosts(username));
  }, [dispatch, allUsers, allPosts, username]);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-deepBlue mb-4">Profile</p>
      {userDetails?.username ? (
        <>
          <UserDetails user={userDetails} postLength={userPosts.length} />
          {userDetailsStatus === "pending" ? (
            <ShimmerPostList />
          ) : userPosts.length > 0 ? (
            <PostList posts={userPosts} />
          ) : (
            <p className="text-deepBlue text-2xl text-center font-semibold mt-5">User don't have posts!</p>
          )}
        </>
      ) : (
        <>
          <ShimmerUserProfile /> <ShimmerPostList />
        </>
      )}
    </div>
  );
};

export { Profile };
