import React from "react";
import ProfileAllPhotos from "./ProfileAllPhotos";
import ProfileAllFriends from "./ProfileAllFriends";
import ProfileInformationPart from "./profile_information_part";
import { useGetAllFriendsListQuery } from "../../../../../redux/api/friendsApi";

const OverviewLeftPart = ({
  user,
  profileInfo,
  profileVisitor,
  setMenuActiveItem,
}) => {
  const { data: friendList } = useGetAllFriendsListQuery(profileInfo?.username);
  
  return (
    <div>
      <ProfileInformationPart
        user={user}
        profileInfo={profileInfo}
        profileVisitor={profileVisitor}
      />

      {profileInfo?.images?.total_count > 0 && (
        <ProfileAllPhotos
          profileInfo={profileInfo}
          setMenuActiveItem={setMenuActiveItem}
        />
      )}

      {friendList?.length >= 1 && (
        <ProfileAllFriends
          friendList={friendList}
          profileVisitor={profileVisitor}
          setMenuActiveItem={setMenuActiveItem}
        />
      )}
    </div>
  );
};

export default OverviewLeftPart;
