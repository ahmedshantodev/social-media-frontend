import React from "react";
import PostCreatePart from "../feeds/PostCreatePart";
import ProfilePosts from "./ProfilePosts";

const ProfileRightPart = ({ user }) => {
  return (
    <div>
      <PostCreatePart />

      <ProfilePosts user={user} />
    </div>
  );
};

export default ProfileRightPart;
