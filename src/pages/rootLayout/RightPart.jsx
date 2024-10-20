import React from "react";
import FriendRequestsPart from "../../components/section/FriendRequestsPart";
import OnlinePart from "../../components/section/OnlinePart";

const RightPart = () => {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <FriendRequestsPart />
      <OnlinePart />
    </div>
  );
};

export default RightPart;
