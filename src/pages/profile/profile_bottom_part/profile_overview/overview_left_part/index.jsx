import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";
import ProfileInformation from "./profile_information_part";

const OverviewLeftPart = ({
  user,
  profileInfo,
  visitor,
  setMenuActiveItem,
}) => {
  return (
    <>
      <ProfileInformation
        user={user}
        profileInfo={profileInfo}
        visitor={visitor}
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
