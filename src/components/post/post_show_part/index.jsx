import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostContent from "./PostContent";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const activeUser = useSelector((activeUser) => activeUser.user.information)

  return (
    <div className="w-full bg-white rounded-[10px] mb-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <PostHeader post={post} />

      <PostContent post={post} />

      <PostFooter post={post} activeUser={activeUser}/>
    </div>
  );
};

export default Post;
