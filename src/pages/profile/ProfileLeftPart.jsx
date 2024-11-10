import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";
import ProfileBio from "./ProfileBio";

const ProfileLeftPart = ({ data , visitor }) => {
  return (
    <div>
      <ProfileBio visitor={visitor} />

      {data?.images?.resources.length >= 1 && (
        <ProfileAllPhotos data={data} />
      )}
      
      <ProfileAllFriends data={data} />

      <p className="py-2 font-segoe-ui font-semibold text-[13px] text-secondary-text px-2.5 text-center">
        Monsur Ahmed Shanto © 2024
      </p>
    </div>
  );
};

export default ProfileLeftPart;
