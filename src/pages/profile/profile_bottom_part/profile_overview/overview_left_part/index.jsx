import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";
import ProfileInformationPart from "./profile_information_part";

const OverviewLeftPart = ({
  user,
  profileInfo,
  profileVisitor,
  setMenuActiveItem,
}) => {
  return (
    <>
      <ProfileInformationPart
        user={user}
        profileVisitor={profileVisitor}
        profileInfo={profileInfo}
      />

      {profileInfo?.images?.total_count > 0 && (
        <ProfileAllPhotos
          profileInfo={profileInfo}
          setMenuActiveItem={setMenuActiveItem}
        />
      )}

      <ProfileAllFriends
        profileInfo={profileInfo}
        setMenuActiveItem={setMenuActiveItem}
      />
    </>
  );
};

export default OverviewLeftPart;
