import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AddPhotoAlternateOutlinedIcon, ClearIcon } from "asset";
import { editUserDetails } from "slices";
import { toast } from "react-hot-toast";

const ProfileModal = ({ setProfileModal, user }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    website: "",
    avatarUrl: "",
    selectedImage: "",
  });

  useEffect(() => {
    const initializeFormData = () => {
      if (user) {
        setFormData({
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio,
          website: user.website,
          avatarUrl: user.avatarUrl,
          selectedImage: "",
        });
      }
    };
  
    initializeFormData();
  }, [user, setFormData]);
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      selectedImage: URL.createObjectURL(file),
    });
  };

  const handleSave = () => {
    const updatedUserData = {
      ...formData,
      _id: user?._id,
      username: user?.username,
      avatarUrl: formData.selectedImage || user?.avatarUrl,
    };
    dispatch(editUserDetails(updatedUserData));
    toast.success("Details Edited Successfully");
    setProfileModal(false);
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      bio: "",
      website: "",
      avatarUrl: "",
      selectedImage: "",
    });
    setProfileModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white w-96 text-deepBlue rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          <ClearIcon
            className="text-gray-600 cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
              {formData.selectedImage ? (
                <img
                  className="w-full h-full object-cover"
                  src={formData.selectedImage}
                  alt="Selected Avatar"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={user?.avatarUrl}
                    alt="Selected Avatar"
                  />
                </div>
              )}
            </div>
            <label
              htmlFor="avatar"
              className="absolute top-14 right-0 bg-gray-200 text-deepBlue rounded-full p-1 cursor-pointer"
            >
              <AddPhotoAlternateOutlinedIcon style={{ fontSize: "1.4rem" }} />
              <input
                type="file"
                id="avatar"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="firstName" className="block font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-300 rounded-lg px-1 py-1 w-full"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="lastName" className="block font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-300 rounded-lg px-1 py-1 w-full"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block font-medium mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            className="border border-gray-300 rounded-lg px-1 py-1 w-full h-24"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block font-medium mb-1">
            Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            className="border border-gray-300 rounded-lg px-1 py-1 w-full"
            value={formData.website}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-deepBlue text-white rounded-lg px-4 py-2"
            onClick={handleSave}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileModal };
