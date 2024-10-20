import React from "react";
import Post from "../../components/section/Post";
import userImageOne from "/public/remove/shanto.jpg";
import postImageOne from "/public/remove/postImageOne.jpg";

const PostPart = () => {
  return (
    <div className="mt-4">
      <Post
        name={`Monsur Ahmed Shanto`}
        image={userImageOne}
        time={`a day ago`}
        content={postImageOne}
      />
      <Post
        name={`Monsur Ahmed Shanto`}
        image={userImageOne}
        time={`a day ago`}
        content={postImageOne}
      />
      <Post
        name={`Monsur Ahmed Shanto`}
        image={userImageOne}
        time={`a day ago`}
        content={postImageOne}
      />
      <Post
        name={`Monsur Ahmed Shanto`}
        image={userImageOne}
        time={`a day ago`}
        content={postImageOne}
      />
    </div>
  );
};

export default PostPart;
