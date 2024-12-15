import React from "react";
import { friendList } from "../../data/friendList";
import FriendListItem from "../../components/layout/FriendListItem";
import SearchBox from "../../components/layout/SearchBox";

const AllFriends = () => {
  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">
          All Friend <span className="text-[#707276]">(290 friends)</span>
        </h4>

        <div className="w-[500px]">
          <SearchBox />
        </div>
      </div>

      <div
        className={"max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"}
      >
        {friendList.map((item, index) => (
          <div className="w-[32.5%]">
            <FriendListItem key={index} info={item} type={"medium"} />
          </div>
        ))}
        {friendList.map((item, index) => (
          <div className="w-[32.5%]">
            <FriendListItem key={index} info={item} type={"medium"} />
          </div>
        ))}
        {friendList.map((item, index) => (
          <div className="w-[32.5%]">
            <FriendListItem key={index} info={item} type={"medium"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
