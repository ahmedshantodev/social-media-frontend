import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";

const ProfileLeftPart = () => {
  return (
    <div>
      <ProfileAllPhotos />
      <ProfileAllFriends />
    </div>
  );
};

export default ProfileLeftPart;
