import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EmojiPicker from "emoji-picker-react";

import { addUserPost } from "slices";
import {
  AddPhotoAlternateOutlinedIcon,
  AddReactionOutlinedIcon,
  ClearIcon,
} from "asset";
import { useOutsideClick } from "hooks";

const PostModal = ({ onClose }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const dispatch = useDispatch();

  const domNode = useOutsideClick(() => setShowEmojiPicker(false));

  const handleCreatePost = () => {
    const newPost = {
      content: newPostContent,
      mediaURL: newPostImage,
    };
    dispatch(addUserPost(newPost))
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  const handleImageChange = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setNewPostImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = newPostContent + emoji;
    setNewPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const isPostDisabled = newPostContent.trim() === ""; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black text-deepBlue">
      <div className="bg-white rounded-lg p-4 w-full max-w-md m-3 sm:m-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Create Post</h2>
          <button className="focus:outline-none" onClick={onClose}>
            <ClearIcon style={{ fontSize: "24px" }} />
          </button>
        </div>
        <textarea
          className="textarea w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          rows={5}
          value={newPostContent}
          onChange={(e)=>setNewPostContent(e.target.value)}
        />
        {newPostImage && (
          <div className="relative mb-4 w-[8rem]">
            <img
              src={newPostImage}
              alt="Post"
              className="object-cover rounded-md h-[7rem]"
            />
            <button
              className="btn absolute top-1 right-1 rounded-full bg-activeGreen w-5 h-5 p-2 flex items-center justify-center"
              onClick={()=>setNewPostImage(null)}
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
                  width="20rem"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className={`btn px-4 py-2 bg-deepBlue text-white rounded-full ${
              isPostDisabled ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleCreatePost}
            disabled={isPostDisabled}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostModal };
