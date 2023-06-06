import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  MoreVertIcon,
  ThumbUpOffAltIcon,
  BookmarkBorderIcon,
  SendIcon,
  MapsUgcOutlinedIcon,
} from "asset";
import { deleteUserPost } from "slices";
import { EditPostModal } from "./EditPostModel";
import { useOutsideClick } from "hooks";

const Post = ({ post, user, allUsers }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const dispatch = useDispatch();

  const domNode = useOutsideClick(() => setShowOptions(false));
  
  const handleEditIconClick = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };
  
  return (
    <div
      className="text-deepBlue border border-gray-300 bg-white rounded-md p-4 mb-4 w-full md:w-[40rem]"
      key={post._id}
    >
      <div className="flex items-center flex-wrap mb-2">
        {/* User avatar */}
        {user?.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt="user avatar"
            className="w-10 h-10 rounded-full mb-2 md:mb-0 md:mr-2"
          />
        )}

        {/* User details */}
        <div className="flex flex-col">
          {user?.avatarUrl && (
            <p className="font-semibold">
              {user.firstName} {user.lastName}
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
            onClick={()=>setShowOptions(!showOptions)}
          />
          {showOptions && (
            <div
              className="absolute right-0 top-6.5 bg-activeGreen border shadow rounded py-2 px-2"
            >
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
          className="mt-4 mb-2 h-[20rem] w-full md:w-[40rem] md:h-[30rem] rounded-md"
        />
      )}

      {/* Like and Bookmark */}
      <div className="flex items-center mt-4 cursor-pointer">
        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} />
        <p className="mr-2">{post.likes?.likeCount}</p>

        <MapsUgcOutlinedIcon
          style={{ fontSize: "2rem" }}
          onClick={()=>setShowCommentSection(!showCommentSection)}
        />
        <p className="mr-2">{post.comments?.length}</p>

        <BookmarkBorderIcon style={{ fontSize: "2rem" }} />
      </div>

      {/* Comment section */}
      {showCommentSection && (
        <div className="flex items-center mt-4 mb-2">
          {user?.avatarUrl && (
            <img
              src={user.avatarUrl}
              alt="user avatar"
              className="w-8 h-8 rounded-full mb-2 md:mb-0 md:mr-2"
            />
          )}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full border border-gray-400 ml-2 rounded-lg p-2 pr-10"
            />
            <button className="absolute right-0 top-2">
              <SendIcon />
            </button>
          </div>
        </div>
      )}
      {/* Comments */}
      {showCommentSection && post.comments && (
        <div className="mt-4">
          {post.comments.map((comment) => {
            // Find the corresponding user object from allUsers
            const user = allUsers.find(
              (user) => user.username === comment.username
            );

            return (
              <div key={comment.id} className="flex mt-2 p-2 mb-2">
                {/* Comment user avatar */}
                {user?.avatarUrl && (
                  <img
                    src={user.avatarUrl}
                    alt="comment user avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}

                {/* Comment content */}
                <div className="bg-gray-200 px-4 py-1 w-full rounded-md sm:rounded-tl-none sm:rounded-[4rem]">
                  <p className="font-semibold">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p>{comment.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Edit post modal */}
      {showEditModal && (
        <EditPostModal post={post} onClose={() => setShowEditModal(false)} />
      )}
    </div>
  );
};

export { Post };
