import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import { PiLinkSimpleBold } from "react-icons/pi";
import like from "/public/reaction/like-normal.png";
import love from "/public/reaction/love-normal.png";
import ReactionPicker from "./ReactionPicker";

const PostFooter = () => {
  return (
    <div className="border-t border-[#e5e5e5] px-4a">
      <div className="flex items-center justify-between border-b border-[#e5e5e5] mx-4 py-2.5">
        <div className="flex items-center gap-x-1">
          <div className="flex items-center">
            <img
              src={like}
              alt="love"
              className="w-[20px] aspect-square object-cover border border-white box-content"
            />
            <img
              src={love}
              alt="love"
              className="w-[20px] aspect-square object-cover border border-white box-content"
            />
          </div>

          <p className="font-poppins text-[16px] text-secondary-text hover:underline cursor-pointer">
            9.8k
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <p className="font-poppins text-[15px] text-secondary-text hover:underline cursor-pointer">
            345 comments
          </p>

          <p className="font-poppins text-[15px] text-secondary-text hover:underline cursor-pointer">
            124 shares
          </p>
        </div>
      </div>

      <div className="px-1 py-[3px] flex items-center">
        <div className="w-1/4 relative group">
          <button className="w-full flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
            <FiThumbsUp className="text-[#606266] text-[22px]" />

            <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
              Like
            </p>
          </button>

          <ReactionPicker />
        </div>

        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <RiChat3Line className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Comment
          </p>
        </button>

        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <PiLinkSimpleBold className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Copy
          </p>
        </button>

        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <PiShareFatBold className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Share
          </p>
        </button>
      </div>
    </div>
  );
};

export default PostFooter;
