import React from "react";
import ProfileOverview from "./profile_overview";
import ProfileAbout from "./profile_about";
import ProfileAllPhotos from "./profile_all_photos";
import ProfileAllFriends from "./profile_all_friends";
import ProfileAllGroups from "./profile_all_groups";
import ProfileAllSavedPosts from "./profile_all_saved_posts";

const ProfileBottomPart = ({
  user,
  data: profileInfo,
  visitor,
  isLoading,
  menuActiveItem,
  setMenuActiveItem,
}) => {
  return menuActiveItem === "intro" ? (
    <ProfileOverview
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "about" ? (
    <ProfileAbout
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "friends" ? (
    <ProfileAllFriends
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "photos" ? (
    <ProfileAllPhotos
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "groups" ? (
    <ProfileAllGroups
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "saved posts" && (
    <ProfileAllSavedPosts
      user={user}
      profileInfo={profileInfo}
      visitor={visitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  );
};

export default ProfileBottomPart;
