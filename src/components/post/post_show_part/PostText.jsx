import React from "react";

const PostText = ({ text }) => {
  return (
    <pre className="text-base font-inter px-4 pb-2 break-words whitespace-pre-wrap">
      {text}
    </pre>
  );
};

export default PostText;
