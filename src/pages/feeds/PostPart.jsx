import React, { useState } from "react";
import Post from "../../components/post/Post";
import { useGetPostQuery } from "../../redux/api/postApi";

const PostPart = () => {
  const { data } = useGetPostQuery();

  return (
    <div className="mt-4">
      {data?.map((item) => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
};

export default PostPart;
