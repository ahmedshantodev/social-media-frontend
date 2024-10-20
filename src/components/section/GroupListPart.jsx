import React from "react";
import { groupList } from "../../data/grouplist";
import GroupListItem from "../listItem/GroupListItem";
import { NavLink } from "react-router-dom";

const GroupListPart = () => {
  return (
    <div className="pb-3">
      <div className="flex items-center justify-between">
        <p className="font-segoe-ui font-semibold text-lg text-secondary-text mb-3">
          Groups
        </p>

        <div>
          <NavLink
            to={"/groups"}
            className="text-tertiary-text font-segoe-ui hover:underline transition-all ease-in-out duration-150"
          >
            See all
          </NavLink>
        </div>
      </div>

      <div>
        {groupList.map(
          (item, index) =>
            index <= 5 && (
              <GroupListItem key={index} image={item.image} name={item.name} />
            )
        )}
      </div>
    </div>
  );
};

export default GroupListPart;
