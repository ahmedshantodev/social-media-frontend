import React from "react";
import { friendRequstList } from "../../data/friendRequstList";
import { NavLink } from "react-router-dom";
import FriendRequstListItem from "../../components/layout/FriendRequstListItem";
import { friendList } from "../../data/friendList";
import FriendListItem from "../../components/layout/FriendListItem";
import { groupList } from "../../data/grouplist";
import GroupListItem from "../../components/layout/GroupListItem";

const RightPart = () => {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar pr-1">
      <div className="border-b border-[#ced0d4] pb-3 mb-3 mt-5">
        <div className="flex items-center justify-between">
          <p className="font-segoe-ui font-semibold text-lg text-secondary-text">
            Friend requsts
          </p>

          <div>
            <NavLink
              to={"/friend-requst"}
              className="text-tertiary-text font-segoe-ui hover:underline transition-all ease-in-out duration-150"
            >
              See all
            </NavLink>
          </div>
        </div>

        <div className="mt-3">
          {friendRequstList.map(
            (item, index) =>
              index <= 4 && (
                <FriendRequstListItem
                  key={index}
                  type={"small"}
                  info={item}
                />
              )
          )}
        </div>
      </div>

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
              index <= 4 && (
                <FriendListItem
                  key={index}
                  info={item}
                  type={"small"}
                />
              )
          )}
        </div>
      </div>

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
              index <= 4 && (
                <GroupListItem
                  key={index}
                  image={item.image}
                  name={item.name}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RightPart;
