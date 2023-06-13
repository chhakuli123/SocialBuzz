import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FollowButton, ProfileModal } from "components";
import { EditIcon } from "asset";

const UserDetails = ({ user, showEditButton, postLength }) => {
  const [profileModal, setProfileModal] = useState(false);

  return (
    <>
      <div className=" bg-white px-6 py-4 gap-4 border rounded-lg shadow-lg flex h-fit sm:gap-6 mb-2">
        {user.avatarUrl ? (
          <img
            src={user?.avatarUrl}
            alt="User Avatar"
            className="sm:h-16 h-12 w-12 rounded-full cursor-pointer sm:w-16 bg-secondary-100"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686139004/SocialBuzz/images_zig8rk.png"
            alt="avatar"
            className="sm:h-12 h-10 w-12 rounded-full cursor-pointer sm:w-16 bg-secondary-100"
          />
        )}

        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <div>
              <p className="md:text-2xl text-lg font-semibold cursor-pointer text-secondary-300">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-gray-400 cursor-pointer">
                @{user?.username}
              </p>
            </div>
            {showEditButton ? (
              <div
                className="font-semibold cursor-pointer text-deepBlue border-deepBlue border-2 rounded-md px-2 py-1 h-8 justify-center flex items-center"
                onClick={() => setProfileModal(true)}
              >
                <EditIcon style={{fontSize:"1rem",marginRight:"3px"}}/> Edit
              </div>
            ) : (
              <FollowButton userDetails={user} />
            )}
          </div>

          <p className="text-gray-500 font-semibold break-all">{user?.bio}</p>

          <div className="font-semibold text-deepBlue mt-2 gap-8 flex ">
            <span>{postLength ?? 0} Posts</span>
            <span>{user?.followers?.length ?? 0} Followers</span>
            <span>{user?.following?.length ?? 0} Following</span>
          </div>

          <div className="font-semibold">
            <Link
              to={user?.website}
              className="decoration-1 text-blue-400 break-all"
              target="_blank"
            >
              {user.website}
            </Link>
          </div>
        </div>
      </div>
      {profileModal && (
        <ProfileModal
          profileModal={profileModal}
          setProfileModal={setProfileModal}
          user={user}
        />
      )}
    </>
  );
};

export { UserDetails };
