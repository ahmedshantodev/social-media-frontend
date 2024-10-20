import React from "react";
import FriendRequestsPart from "../../components/section/FriendRequestsPart";
import FriendListPart from "../../components/section/FriendListPart";
import GroupListPart from "../../components/section/GroupListPart";

const RightPart = () => {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <FriendRequestsPart />
      <FriendListPart />
      <GroupListPart />
    </div>
  );
};

export default RightPart;
