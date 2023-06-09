import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserComment, deleteUserComment, editUserComment } from "slices";
import { SendIcon } from "asset";
import { CommentItem } from "./CommentItem";

const Comment = ({ post, allUsers }) => {
  const [commentText, setCommentText] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleAddComment = () => {
    dispatch(
      addUserComment({
        postId: post._id,
        commentData: {
          text: commentText,
        },
      })
    );
    setCommentText("");
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
    setCommentText(comment.text);
  };

  const handleUpdateComment = () => {
    dispatch(
      editUserComment({
        postId: post._id,
        commentId: editingComment._id,
        commentData: {
          text: editingComment.text,
        },
      })
    );
    setEditingComment(null);
    setCommentText("");
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteUserComment({ postId: post._id, commentId }));
  };

  return (
    <div>
      <div className="flex items-center mt-4 mb-2">
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="user avatar"
            className="w-8 h-8 rounded-full mb-2 md:mb-0 md:mr-2"
          />
        ):(<img src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png" alt="avtar"   className="w-10 h-8 rounded-full mb-2 md:mb-0 md:mr-2"/>)}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Add a comment..."
            className="input w-full border border-gray-400 ml-2 rounded-lg p-2 pr-10"
            value={editingComment ? editingComment.text : commentText}
            onChange={(e) =>
              editingComment
                ? setEditingComment({
                    ...editingComment,
                    text: e.target.value,
                  })
                : setCommentText(e.target.value)
            }
          />
          <button
            className="absolute right-0 top-2"
            onClick={editingComment ? handleUpdateComment : handleAddComment}
          >
            {editingComment ? (
              <span className="text-customGreen font-bold text-lg">Update</span>
            ) : (
              <SendIcon />
            )}
          </button>
        </div>
      </div>

      <div className="mt-4">
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              user={user}
              allUsers={allUsers}
              handleEditComment={handleEditComment}
              handleDeleteComment={handleDeleteComment}
            />
          ))
        ) : (
          <p className="flex justify-center text-deepBlue text-lg font-semibold">Share your comment with us!</p>
        )}
      </div>
    </div>
  );
};

export { Comment };
