import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { followUnfollowUser } from "slices";

const FollowButton = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const isFollowing = userDetails.followers.some(
    (currentUser) => currentUser.username === user.username
  );

  return isFollowing ? (
    <button
      className="font-semibold cursor-pointer text-white bg-deepBlue rounded-2xl px-3 py-1 h-8"
      onClick={() =>
        dispatch(
          followUnfollowUser({
            userId: userDetails._id,
            isFollowing: isFollowing,
            dispatch,
          })
        )
      }
    >
      Following
    </button>
  ) : (
    <button
      className="font-semibold cursor-pointer text-white bg-deepBlue rounded-2xl px-3 py-1  h-8"
      onClick={() =>
        dispatch(
          followUnfollowUser({
            userId: userDetails._id,
            isFollowing: isFollowing,
            dispatch,
          })
        )
      }
    >
      + Follow
    </button>
  );
};

export { FollowButton };
