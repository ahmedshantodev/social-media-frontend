import React from "react";
import ProfileOverview from "./profile_overview";
import ProfileAllPhotos from "./profile_all_photos";
import ProfileAllFriends from "./profile_all_friends";
import ProfileAllGroups from "./profile_all_groups";
import ProfileAllSavedPosts from "./profile_all_saved_posts";

const ProfileBottomPart = ({
  user,
  isLoading,
  profileInfo,
  menuActiveItem,
  profileVisitor,
  setMenuActiveItem,
}) => {
  return menuActiveItem === "intro" ? (
    <ProfileOverview
      user={user}
      isLoading={isLoading}
      profileInfo={profileInfo}
      menuActiveItem={menuActiveItem}
      profileVisitor={profileVisitor}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "friends" ? (
    <ProfileAllFriends
      user={user}
      profileInfo={profileInfo}
      profileVisitor={profileVisitor}
    />
  ) : menuActiveItem === "photos" ? (
    <ProfileAllPhotos profileInfo={profileInfo}/>
  ) : menuActiveItem === "groups" ? (
    <ProfileAllGroups />
  ) : (
    menuActiveItem === "saved posts" && (
      <ProfileAllSavedPosts/>
    )
  );
};

export default ProfileBottomPart;
