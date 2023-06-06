import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EmojiPicker from "emoji-picker-react";

import { editUserPost } from "slices";
import {
  AddPhotoAlternateOutlinedIcon,
  AddReactionOutlinedIcon,
  ClearIcon,
} from "asset";
import { useOutsideClick } from "hooks";

const EditPostModal = ({ post, onClose }) => {
  const [updatedPostContent, setUpdatedPostContent] = useState(post.content);
  const [updatedPostImage, setUpdatedPostImage] = useState(post.mediaURL);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const dispatch = useDispatch();

  const domNode = useOutsideClick(() => setShowEmojiPicker(false));

  const handleEditPost = () => {
    const updatedPost = {
      ...post,
      content: updatedPostContent,
      mediaURL: updatedPostImage,
    };
    dispatch(editUserPost(updatedPost))
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const handleContentChange = (e) => {
    setUpdatedPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUpdatedPostImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = updatedPostContent + emoji;
    setUpdatedPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const handleDeleteImage = () => {
    setUpdatedPostImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black text-deepBlue">
      <div className="bg-white rounded-lg p-4 w-full max-w-md m-3 sm:m-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Post</h2>
          <button className="focus:outline-none" onClick={onClose}>
            <ClearIcon style={{ fontSize: "24px" }} />
          </button>
        </div>
        <textarea
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          rows={5}
          value={updatedPostContent}
          onChange={handleContentChange}
        />
        {updatedPostImage && (
          <div className="relative mb-4 w-[8rem]">
            <img
              src={updatedPostImage}
              alt="Post"
              className="object-cover rounded-md h-[7rem]"
            />
            <button
              className="absolute top-1 right-1 rounded-full bg-activeGreen w-5 h-5 p-2 flex items-center justify-center"
              onClick={handleDeleteImage}
            >
              <ClearIcon style={{ fontSize: "1rem" }} />
            </button>
          </div>
        )}
        <div className="flex items-center gap-2 cursor-pointer">
          <AddPhotoAlternateOutlinedIcon
            style={{ fontSize: "30px" }}
            onClick={handleImageChange}
          />
          <div className="relative" ref={domNode}>
            <AddReactionOutlinedIcon
              className="add-reaction-icon"
              style={{ fontSize: "30px" }}
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div
                className="z-10 drop-shadow-lg absolute top-4 right-0 left-[1rem]"
                onClick={(e) => e.stopPropagation()}
              >
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  height="300px"
                  width="25em"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-customGreen text-white rounded-md"
            onClick={handleEditPost}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export { EditPostModal };
