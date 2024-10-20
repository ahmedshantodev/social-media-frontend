import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import { PiLinkSimpleBold } from "react-icons/pi";

const Post = ({ image, name, time, content }) => {
  return (
    <div className="w-full bg-white rounded-[10px] mb-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="px-5 py-[14px] flex items-center justify-between border-b border-[#e5e5e5]">
        <div className="flex items-center gap-x-2.5">
          <div className="w-[45px] aspect-square">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-full border border-primary-border"
            />
          </div>

          <div>
            <h3 className="font-segoe-ui font-semibold text-[17px] leading-none mb-[2px] hover:underline cursor-pointer">
              {name}
            </h3>
            <p className="font-segoe-ui text-sm font-medium text-secondary-text leading-none">
              {time}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <HiDotsHorizontal className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
          <RxCross2 className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
        </div>
      </div>

      <div>
        <img src={content} alt="" className="w-full" />
      </div>

      <div className="px-1 py-[3px] flex items-center border-t border-[#e5e5e5]">
        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <FiThumbsUp className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Like
          </p>
        </button>

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

export default Post;
