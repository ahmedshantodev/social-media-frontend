import React, { useState } from "react";

const PostText = ({ text }) => {
  const [seeMore, setSeeMore] = useState(false);
  const truncatedText = seeMore ? text : text.substring(0, 200) + "...";

  return text?.length <= 200 ? (
    <pre className="text-[18px] font-inter px-4 pb-2 break-words whitespace-pre-wrap">
      {text}
    </pre>
  ) : (
    <pre className="text-[18px] font-inter px-4 pb-2 break-words whitespace-pre-wrap">
      {truncatedText}{" "}
      <span
        onClick={() => setSeeMore(!seeMore)}
        className="font-semibold cursor-pointer hover:underline"
      >
        {seeMore ? "see less" : "see more"}
      </span>
    </pre>
  );
};

export default PostText;
