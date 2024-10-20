import React from "react";
import { friendList } from "../../data/friendList";
import FriendListItem from "../listItem/FriendListItem";
import { NavLink } from "react-router-dom";

const FriendListpart = () => {
  return (
    <div className="border-b border-[#ced0d4] pb-3 mb-3">
      <div className="flex items-center justify-between">
        <p className="font-segoe-ui font-semibold text-lg text-secondary-text mb-3">
          Friends
        </p>

        <div>
          <NavLink
            to={"/friends"}
            className="text-tertiary-text font-segoe-ui hover:underline transition-all ease-in-out duration-150"
          >
            See all
          </NavLink>
        </div>
      </div>

      <div>
        {friendList.map(
          (item, index) =>
            index <= 5 && (
              <FriendListItem
                key={index}
                image={item.image}
                name={item.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default FriendListpart;
