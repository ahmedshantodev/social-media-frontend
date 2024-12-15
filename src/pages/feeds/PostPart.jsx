import React from "react";
import { useGetPostQuery } from "../../redux/api/postApi";
import Post from "../../components/post/post_show_part";

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
