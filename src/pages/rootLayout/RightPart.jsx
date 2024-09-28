import React from "react";
import FriendRequestsPart from "./FriendRequestsPart";
import ContactsPart from "./ContactsPart";

const RightPart = () => {
  return (
    <div className="w-[450px] ml-auto">
      <FriendRequestsPart />
      <ContactsPart />
    </div>
  );
};

export default RightPart;
