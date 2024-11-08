import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";
import ProfileBio from "./ProfileBio";

const ProfileLeftPart = () => {
  return (
    <div>
      <ProfileBio />
      <ProfileAllPhotos />
      <ProfileAllFriends />

      <p className="py-2 font-segoe-ui font-semibold text-[13px] text-secondary-text px-2.5 text-center">
        Monsur Ahmed Shanto © 2024
      </p>
    </div>
  );
};

export default ProfileLeftPart;
