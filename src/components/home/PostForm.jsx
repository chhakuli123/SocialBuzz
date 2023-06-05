import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Picker from "emoji-picker-react";

import {
  AddPhotoAlternateOutlinedIcon,
  AddReactionOutlinedIcon,
  ClearIcon,
} from "asset";

const PostForm = () => {
  const { user } = useSelector((state) => state.auth);

  const [postContent, setPostContent] = useState("");
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        !event.target.classList.contains("add-reaction-icon")
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      setSelectedImageName(file.name);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  return (
    <div>
      <div className="flex flex-col border bg-white rounded-lg shadow-lg p-4 mb-8 sm:w-full md:w-[40rem]">
        <div className="flex">
          <img
            src={user.avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-1"
          />
          <textarea
            className="w-full h-32 ml-4 border-none rounded-lg resize-none focus:outline-none"
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>

        {selectedImageName && (
          <div className="flex items-center p-1 mt-1 ml-12 mb-2 bg-activeGreen rounded-xl w-max">
            <p className="mb-1 mr-1 font-semibold">{selectedImageName}</p>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => {
                setSelectedImageName(null);
              }}
            >
              <ClearIcon />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <AddPhotoAlternateOutlinedIcon
              style={{ fontSize: "30px" }}
              onClick={handleImageSelect}
            />
            <div
              className="relative"
              ref={emojiPickerRef}
            >
              <AddReactionOutlinedIcon
                className="add-reaction-icon"
                style={{ fontSize: "30px" }}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
              {showEmojiPicker && (
                <div className="z-10 drop-shadow-lg absolute top-4 right-0 left-[1rem]">
                  <Picker onEmojiClick={handleEmojiClick}/>
                </div>
              )}
            </div>
          </div>

          <button className="bg-customGreen hover:bg-green-500 text-white font-semibold py-1 px-8 text-xl rounded">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostForm };
