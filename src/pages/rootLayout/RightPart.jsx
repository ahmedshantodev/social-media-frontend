import React from "react";
import FriendRequestsPart from "../../components/section/FriendRequestsPart";
import ContactsPart from "../../components/section/ContactsPart";

const RightPart = () => {
  return (
    <div className="w-full">
      <FriendRequestsPart />
      <ContactsPart />
    </div>
  );
};

export default RightPart;
