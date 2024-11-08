import React, { useState } from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";

const PostViewType = () => {
  const [postViewType, setPostViewType] = useState("line");

  return (
    <div className="w-full bg-white pt-4 mt-4 rounded-[10px] overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <p className="font-poppins text-xl font-medium px-4 pb-3 border-b-2 border-primary-border/50">
        Post View
      </p>

      <div className="w-full flex">
        <button
          onClick={() => setPostViewType("line")}
          className={
            postViewType == "line"
              ? "w-1/2 py-2.5 bg-white flex items-center justify-center gap-x-2 text-lg text-primary-button font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[3px]"
              : "w-1/2 py-2.5 bg-white flex items-center justify-center gap-x-2 text-lg text-secondary-text font-medium"
          }
        >
          <SlMenu /> Line view
        </button>

        <button
          onClick={() => setPostViewType("grid")}
          className={
            postViewType == "grid"
              ? "w-1/2 py-2.5 bg-white flex items-center justify-center gap-x-2 text-lg text-primary-button font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[3px]"
              : "w-1/2 py-2.5 bg-white flex items-center justify-center gap-x-2 text-lg text-secondary-text font-medium"
          }
        >
          <TfiLayoutGrid2Alt /> Grid view
        </button>
      </div>
    </div>
  );
};

export default PostViewType;
