import React from "react";
import OverviewLeftPart from "./overview_left_part";
import OverviewRightPart from "./overview_right_part";

const ProfileOverview = ({
  user,
  isLoading,
  profileInfo,
  profileVisitor,
  menuActiveItem,
  setMenuActiveItem,
}) => {
  return (
    <div className="flex gap-x-4 relative">
      <div className="w-[40%]">
        <OverviewLeftPart
          user={user}
          isLoading={isLoading}
          profileInfo={profileInfo}
          menuActiveItem={menuActiveItem}
          profileVisitor={profileVisitor}
          setMenuActiveItem={setMenuActiveItem}
        />
      </div>

      <div className="w-[60%]">
        <OverviewRightPart
          user={user}
          isLoading={isLoading}
          profileInfo={profileInfo}
          menuActiveItem={menuActiveItem}
          profileVisitor={profileVisitor}
          setMenuActiveItem={setMenuActiveItem}
        />
      </div>
    </div>
  );
};

export default ProfileOverview;
