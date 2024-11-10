import React from "react";
import PostCreatePart from "../feeds/PostCreatePart";
import ProfilePosts from "./ProfilePosts";

const ProfileRightPart = ({ data, visitor }) => {
  return (
    <div>
      <PostCreatePart />

      <ProfilePosts data={data} />
    </div>
  );
};

export default ProfileRightPart;
