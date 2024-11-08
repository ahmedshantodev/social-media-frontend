import React from "react";
import Post from "../../components/post/Post";

const ProfilePosts = ({ user }) => {
  
  return (
    <div className="mt-4">
      {user?.posts.map((item) => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
};

export default ProfilePosts;
