import React from "react";
import ProfileOverview from "./profile_overview";
import ProfileAbout from "./profile_about";
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
  ) : menuActiveItem === "about" ? (
    <ProfileAbout
      user={user}
      profileInfo={profileInfo}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      profileVisitor={profileVisitor}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "friends" ? (
    <ProfileAllFriends
      user={user}
      profileInfo={profileInfo}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      profileVisitor={profileVisitor}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "photos" ? (
    <ProfileAllPhotos
      user={user}
      profileInfo={profileInfo}
      isLoading={isLoading}
      profileVisitor={profileVisitor}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "groups" ? (
    <ProfileAllGroups
      user={user}
      profileInfo={profileInfo}
      isLoading={isLoading}
      profileVisitor={profileVisitor}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  ) : menuActiveItem === "saved posts" && (
    <ProfileAllSavedPosts
      user={user}
      profileInfo={profileInfo}
      profileVisitor={profileVisitor}
      isLoading={isLoading}
      menuActiveItem={menuActiveItem}
      setMenuActiveItem={setMenuActiveItem}
    />
  );
};

export default ProfileBottomPart;
