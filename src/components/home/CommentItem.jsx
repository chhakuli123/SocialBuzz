import { useState } from "react";

import { MoreVertIcon } from "asset";
import { useOutsideClick } from "hooks";

const CommentItem = ({
  comment,
  user,
  allUsers,
  handleEditComment,
  handleDeleteComment,
}) => {
  const [commentOptions, setCommentOptions] = useState(false);

  const commentUser = allUsers.find((u) => u.username === comment.username);
  const isCurrentUserComment = comment.username === user?.username;

  const domNode = useOutsideClick(() => {
    setCommentOptions(false);
  });

  const toggleOptions = () => {
    setCommentOptions((prevShowOptions) => !prevShowOptions);
  };

  return (
    <div key={comment._id} className="flex mt-2 p-2 mb-2">
      {/* Comment user avatar */}
      {isCurrentUserComment ? (
        user?.avatarUrl ? (
          <img
            src={user?.avatarUrl}
            alt="current user avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
            alt="default avatar"
            className="w-10 h-8 rounded-full mb-2 md:mb-0 md:mr-2"
          />
        )
      ) : commentUser?.avatarUrl ? (
        <img
          src={commentUser.avatarUrl}
          alt="comment user avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
          alt="default avatar"
          className="w-10 h-8 rounded-full mb-2 md:mb-0 md:mr-2"
        />
      )}

      {/* Comment content */}
      <div className="bg-gray-200 px-4 py-1 w-full rounded-md sm:rounded-tl-none sm:rounded-[1rem] input">
        <div className="text-lg font-semibold flex justify-between">
          {isCurrentUserComment ? (
            <span>{user?.firstName} {user?.lastName}</span>
          ) : commentUser ? (
            <span>{commentUser?.firstName} {commentUser?.lastName}</span>
          ) : (
            <span>Unknown User</span>
          )}
          {isCurrentUserComment && (
            <div className="relative" ref={domNode}>
              <MoreVertIcon
                className="cursor-pointer"
                onClick={toggleOptions}
              />
              {commentOptions && (
                <div className="absolute right-0 top-6.5 rounded-lg bg-white border shadow py-1 px-2">
                  <div
                    className="options cursor-pointer py-1 px-4 rounded-lg hover:bg-activeGreen"
                    onClick={() => handleEditComment(comment)}
                  >
                    Edit
                  </div>
                  <div
                    className="options cursor-pointer py-1 px-4 rounded-lg hover:bg-activeGreen"
                    onClick={() => handleDeleteComment(comment._id)}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export { CommentItem };
