import React from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const PostHeader = ({ post }) => {
  return (
    <div className="px-4 py-[10px] flex items-center justify-between">
      <div className="flex items-center gap-x-2.5">
        <Link
          to={`/${post?.user?.username}`}
          className="min-w-[45px] max-w-[45px] aspect-square"
        >
          <img
            src={post?.user?.profilePicture}
            alt={post?.user?.fullName}
            className="w-full h-full object-cover rounded-full"
          />
        </Link>

        <div className="flex flex-col gap-y-[2px]">
          <div className="flex gap-x-1">
            <Link
              to={`/profile/${post?.user?.username}`}
              className="font-inter font-medium text-[18px] leading-none tracking-[0.45px] hover:underline"
            >
              {post?.user?.fullName} 
            </Link>

            {post?.feelings && (
              <p className="font-inter text-secondary-text font-medium text-[18px] leading-none tracking-[0.45px]">
                is feeling {post?.feelings?.feeling + post?.feelings?.emoji}
              </p>
            )}

            {post?.type === "profilePicture" && (
              <p className="font-inter text-secondary-text text-[18px] leading-none tracking-[0.45px]">
                updated {post?.user?.gender === "male" ? "his" : "her"} profile picture.
              </p>
            )}

            {post?.type === "coverPhoto" && (
              <p className="font-inter text-secondary-text text-[18px] leading-none tracking-[0.45px]">
                updated {post?.user?.gender === "male" ? "his" : "her"} cover photo.
              </p>
            )}
          </div>

          <p className="font-inter text-[14px] font-medium text-secondary-text">
            {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <HiDotsHorizontal className="box-content text-secondary-text text-[24px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
        <RxCross2 className="box-content text-secondary-text text-[24px] hover:bg-[#f2f2f2] p-2 rounded-full cursor-pointer transition-all duration-150 ease-in-out" />
      </div>
    </div>
  );
};

export default PostHeader;
