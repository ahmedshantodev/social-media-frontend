import React from "react";
import SearchBox from "../../components/layout/SearchBox";
import { friendRequstList } from "../../data/friendRequstList";
import FriendRequstListItem from "../../components/layout/FriendRequstListItem";

const FriendRequsts = () => {
  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">
          Friend Requests <span className="text-[#707276]">(290 requsts)</span>
        </h4>

        <div className="w-[500px]">
          <SearchBox />
        </div>
      </div>

      <div
        className={"max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"}
      >
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
        {friendRequstList.map((item, index) => (
          <div className="w-[15.7%]">
            <FriendRequstListItem key={index} type="big" info={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequsts;
