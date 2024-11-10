import React from "react";
import Post from "../../components/post/Post";
import PostViewType from "./PostViewType";

const ProfilePosts = ({ data }) => {
  return (
    <div>
      {data?.posts.length >= 1 && <PostViewType />}

      {data?.posts.length >= 1 ? (
        data?.posts.map((item) => <Post key={item._id} post={item} />)
      ) : (
        <div className="w-full bg-white px-4 pt-4 pb-4 mt-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <p className="font-poppins text-xl font-medium text-center">
            No post available
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePosts;
