import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  MoreVertIcon,
  ThumbUpOffAltIcon,
  ThumbUpIcon,
  BookmarkBorderIcon,
  MapsUgcOutlinedIcon,
} from "asset";
import { deleteUserPost, likeDislikeUserPost } from "slices";
import { useOutsideClick } from "hooks";
import { EditPostModal } from "./EditPostModel";
import { Comment } from "./Comment";

const Post = ({ post, allUsers }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const domNode = useOutsideClick(() => {
    setShowOptions(false);
  });
  
  const handleEditIconClick = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };

  const postUser = allUsers.find((user) => user.username === post.username);

  const isLiked =post?.likes?.likedBy?.some((likeUser) => likeUser?._id === user?._id);

  return (
    <div
      className="text-deepBlue border border-gray-300 bg-white px-6 py-4 rounded-lg shadow-lg w-full mt-3 flex h-fit flex-col "
      key={post._id}
    >
      <div className="flex items-center flex-wrap mb-2">
        {/* User avatar */}
        {postUser?.avatarUrl ? (
          <img
            src={postUser.avatarUrl}
            alt="user avatar"
            className="w-10 h-10 rounded-full mb-2 md:mb-0 md:mr-2"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
            alt="avtar"
            className="w-12 h-10 rounded-full mb-2 md:mb-0 md:mr-2"
          />
        )}

        {/* User details */}
        <div className="flex flex-col">
          {postUser && (
            <p className="font-semibold">
              {postUser.firstName} {postUser.lastName}
            </p>
          )}
          <p className="text-md text-gray-500">
            @{post.username} -
            {new Date(post.createdAt).toLocaleDateString("en-US")}
          </p>
        </div>

        {/* More options */}
        <div className="relative ml-auto" ref={domNode}>
          <MoreVertIcon
            className="more-vert-icon cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          />
          {showOptions && (
            <div className="absolute right-0 top-6.5 bg-activeGreen border shadow rounded py-2 px-2">
              <div
                className="cursor-pointer py-2 px-4"
                onClick={handleEditIconClick}
              >
                Edit
              </div>
              <div
                onClick={() => dispatch(deleteUserPost(post && post?._id))}
                className="cursor-pointer py-2 px-4"
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>

      <p>{post.content}</p>

      {/* Post Image */}
      {post.mediaURL && (
        <img
          src={post.mediaURL}
          alt="post media"
          className="mt-4 mb-2 w-full rounded-md"
        />
      )}

      {/* Like and Bookmark */}
      <div className="flex items-center mt-4 cursor-pointer">
        <span
          className="flex items-center"
          onClick={() => {
            dispatch(
              likeDislikeUserPost({ postId: post._id, isLiked: isLiked })
            );
          }}
        >
          {isLiked ? (
            <ThumbUpIcon style={{ fontSize: "2rem" }} />
          ) : (
            <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} />
          )}
          <p className="ml-1 mr-2">{post.likes?.likeCount}</p>
        </span>

        <MapsUgcOutlinedIcon
          style={{ fontSize: "2rem" }}
          onClick={() => setShowCommentSection(!showCommentSection)}
        />
        <p className="mr-1">{post?.comments?.length}</p>

        <BookmarkBorderIcon style={{ fontSize: "2rem" }} />
      </div>

      {/* Comments */}
      {showCommentSection && (
        <Comment
          post={post}
          user={postUser}
          allUsers={allUsers}
          showCommentSection={showCommentSection}
        />
      )}

      {/* Edit post modal */}
      {showEditModal && (
        <EditPostModal post={post} onClose={() => setShowEditModal(false)} />
      )}
    </div>
  );
};

export { Post };
