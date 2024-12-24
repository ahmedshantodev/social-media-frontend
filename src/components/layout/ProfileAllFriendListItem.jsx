import React from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import PrimaryButton from "../layout/PrimaryButton";
import SecondaryButton from "../layout/SecondaryButton";

const ProfileAllFriendListItem = ({ type, info }) => {
  return type === "skeleton" ? (
    <div
      className={`bg-white border border-primary-border/50 rounded-[6px] p-4 flex items-center gap-x-5`}
    >
      <Skeleton type={`image`} className={`w-[17%] aspect-square`} />

      <div className="w-[83%]">
        <Skeleton type={`box`} className={`w-[70%] h-4 mb-[6px]`} />
        <Skeleton type={`box`} className={`w-[55%] h-[14px]`} />
      </div>
    </div>
  ) : (
    <div
      className={`bg-white border border-primary-border/50 rounded-[6px] p-4 flex items-center gap-x-5`}
    >
      <div className="w-[17%] aspect-square rounded-[6px] overflow-hidden border cursor-pointer">
        <img
          src={info.profilePicture}
          alt={info.username}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[83%] flex items-center justify-between">
        <div>
          <Link
            to={`/${info.username}`}
            className="text-[19px] font-medium font-segoe-ui text-primary-text hover:underline"
          >
            {info.firstName + " " + info.lastName}
          </Link>

          <p className="text-secondary-text font-inter text-sm leading-none hover:underline cursor-pointer">
            80 mutual friends
          </p>
        </div>

        <PrimaryButton>
          Add Friend
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ProfileAllFriendListItem;
