import React from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const PostHeader = ({ post }) => {
    
  return (
    <div className="px-4 py-[10px] flex items-center justify-between border-b border-[#e5e5e5]">
      <div className="flex items-center gap-x-2.5">
        <Link
          to={`/profile/${post.user.username}`}
          className="w-[40px] aspect-square"
        >
          <img
            src={post.user.profilePicture}
            alt={post.user.firstName + " " + post.user.lastName}
            className="w-full h-full object-cover rounded-full border border-primary-border"
          />
        </Link>

        <div className="flex flex-col">
          <Link
            to={`/profile/${post.user.username}`}
            className="font-segoe-ui font-semibold text-[16px] leading-none mb-[2px] hover:underline"
          >
            {post.user.firstName} {post.user.lastName}
          </Link>

          <p className="font-segoe-ui text-[13px] font-medium text-secondary-text">
            {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <HiDotsHorizontal className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
        <RxCross2 className="box-content text-secondary-text text-[23px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
      </div>
    </div>
  );
};

export default PostHeader;
