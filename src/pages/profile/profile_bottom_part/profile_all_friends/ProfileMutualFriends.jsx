import React from "react";
import FriendListItem from "../../../../components/layout/FriendListItem";

const ProfileMutualFriends = ({ searchValue, profileInfo }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-5">
      <div className="w-[49%]">
        <FriendListItem type={"medium-skeleton"} />
      </div>
      
      <div className="w-[49%]">
        <FriendListItem type={"medium-skeleton"} />
      </div>

      <div className="w-[49%]">
        <FriendListItem type={"medium-skeleton"} />
      </div>

      <div className="w-[49%]">
        <FriendListItem type={"medium-skeleton"} />
      </div>
    </div>
  );
};

export default ProfileMutualFriends;
