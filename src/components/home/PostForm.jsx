import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Picker from "emoji-picker-react";

import {
  AddPhotoAlternateOutlinedIcon,
  AddReactionOutlinedIcon,
  ClearIcon,
} from "asset";
import { addUserPost } from "slices";
import { useOutsideClick } from "hooks";

const PostForm = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const domNode = useOutsideClick(() => setShowEmojiPicker(false));

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageName(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const handlePostClick = () => {
    const postData = {
      content: postContent,
      mediaURL: selectedImageName,
      userId: user._id,
    };
    dispatch(addUserPost(postData));
    setPostContent("");
    setSelectedImageName(null);
  };

  return (
    <div className="bg-white px-6 py-4 mb-2 w-full border rounded-lg shadow-lg  flex h-fit flex-col ">
      <div className="flex">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-1"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
            alt="avtar"
            className="w-12 h-10 rounded-full mr-1"
          />
        )}
        <textarea
          className="w-full h-32 ml-4 border-none rounded-lg resize-none focus:outline-none"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
      </div>

      {selectedImageName && (
        <div className="relative mb-4  w-[8rem]">
          <img
            src={selectedImageName}
            alt="Post"
            className="object-cover rounded-md h-[7rem]"
          />
          <button
            className="absolute top-1 right-1 rounded-full bg-activeGreen w-5 h-5 p-2 flex items-center justify-center"
            onClick={() => {
              setSelectedImageName(null);
            }}
          >
            <ClearIcon style={{ fontSize: "1rem" }} />
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <AddPhotoAlternateOutlinedIcon
            style={{ fontSize: "30px" }}
            onClick={handleImageSelect}
          />
          <div className="relative" ref={domNode}>
            <AddReactionOutlinedIcon
              className="add-reaction-icon"
              style={{ fontSize: "30px" }}
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div className="z-10 drop-shadow-lg absolute top-4 right-0 left-[1rem]">
                <Picker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handlePostClick}
          className="bg-customGreen hover:bg-green-500 text-white font-semibold py-1 px-8 text-xl rounded"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export { PostForm };
