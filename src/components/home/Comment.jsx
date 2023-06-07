import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addUserComment, deleteUserComment, editUserComment } from "slices";
import { SendIcon } from "asset";
import { CommentItem } from "./CommentItem";

const Comment = ({ post, user, allUsers }) => {
  const [commentText, setCommentText] = useState("");
  const [editingComment, setEditingComment] = useState(null);

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
            {editingComment ? <span className="text-customGreen font-bold text-lg">Update</span> : <SendIcon />}
          </button>
        </div>
      </div>

      <div className="mt-4">
        {post.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            user={user}
            allUsers={allUsers}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export { Comment };
