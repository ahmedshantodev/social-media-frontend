import React from "react";
import FriendRequstListItem from "../listItem/FriendRequstListItem";
import { NavLink } from "react-router-dom";
import { friendRequstList } from "../../data/friendRequstList";

const FriendRequestsPart = () => {
  return (
    <div className="border-b border-[#ced0d4] pb-3 mb-3">
      <div className="flex items-center justify-between">
        <p className="font-segoe-ui font-semibold text-lg text-secondary-text">
          Friend requsts
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

      <div className="mt-3">
        {friendRequstList.map((item , index) => (
          <FriendRequstListItem
            key={index}
            image={item.image}
            name={item.name}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestsPart;
