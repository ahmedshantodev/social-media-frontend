import React from "react";
import OverviewLeftPart from "./overview_left_part";
import OverviewRightPart from "./overview_right_part";

const ProfileOverview = ({
  user,
  profileInfo,
  visitor,
  isLoading,
  menuActiveItem,
  setMenuActiveItem,
}) => {
  return (
    <div className="flex items-start gap-x-4">
      <div className="w-[40%]">
        <OverviewLeftPart
          user={user}
          profileInfo={profileInfo}
          visitor={visitor}
          isLoading={isLoading}
          menuActiveItem={menuActiveItem}
          setMenuActiveItem={setMenuActiveItem}
        />
      </div>

      <div className="w-[60%]">
        <OverviewRightPart
          user={user}
          profileInfo={profileInfo}
          visitor={visitor}
          isLoading={isLoading}
          menuActiveItem={menuActiveItem}
          setMenuActiveItem={setMenuActiveItem}
        />
      </div>
    </div>
  );
};

export default ProfileOverview;
