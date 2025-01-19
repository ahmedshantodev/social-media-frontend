import React from "react";
import ProfilePosts from "./ProfilePosts";
import PostCreatePart from "../../../../../components/post/post_create_part"

const OverviewRightPart = ({ profileInfo, profileVisitor }) => {
  return (
    <>
      {!profileVisitor && (
        <PostCreatePart />
      )}

      <ProfilePosts profileInfo={profileInfo} />
    </>
  );
};

export default OverviewRightPart;
