import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import userImage from "/public/remove/shanto.jpg";

const Post = () => {
  return (
    <div className="w-full bg-white rounded-[10px] mb-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="px-5 py-[14px] flex items-center justify-between border-b border-[#e5e5e5]">
        <div className="flex items-center gap-x-2.5">
          <div className="w-[45px] aspect-square">
            <img
              src={userImage}
              alt=""
              className="w-full h-full object-cover rounded-full border border-primary-border"
            />
          </div>

          <div>
            <h3 className="font-segoe-ui font-semibold text-[17px] leading-none mb-[2px] hover:underline cursor-pointer">
              Monsur Ahmed Shanto
            </h3>
            <p className="font-segoe-ui text-sm font-medium text-secondary-text leading-none">
              a day ago
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <HiDotsHorizontal className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
          <RxCross2 className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
        </div>
      </div>

      <div className="bg-[#857b7a]">
        <img
          src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/463818061_122222480720024209_6030261549233848119_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=9Z5rUe9xeRIQ7kNvgGPyzA4&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AE9Hi2sVbLgBaGpLFXo6cAT&oh=00_AYAt1XVajyAi6lKBmQeAm1VOhsuelpN02Oo_bUs2_6VU_g&oe=671864F3"
          alt=""
          className="w-full h-[500px] object-contain"
        />
      </div>

      <div className="px-5 py-[3px] flex items-center border-t border-[#e5e5e5]">
        <button className="w-1/3 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
            <FiThumbsUp className="text-[#606266] text-[24px]"/>
            <p className="font-segoe-ui font-medium text-[19px] text-[#606266]">Like</p>
        </button>

        <button className="w-1/3 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
            <RiChat3Line className="text-[#606266] text-[24px]"/>
            <p className="font-segoe-ui font-medium text-[19px] text-[#606266]">Comment</p>
        </button>

        <button className="w-1/3 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
            <PiShareFatBold className="text-[#606266] text-[24px]"/>
            <p className="font-segoe-ui font-medium text-[19px] text-[#606266]">Share</p>
        </button>
      </div>
    </div>
  );
};

export default Post;
