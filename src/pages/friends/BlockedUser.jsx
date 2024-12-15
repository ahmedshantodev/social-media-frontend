import React from "react";
import SearchBox from "../../components/layout/SearchBox";
import BlockedUser from "../../components/layout/BlockListItem";
import { blockedUserList } from "../../data/blockedUserList";

const BlockList = () => {
  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">Blocked user</h4>

        <div className="w-[500px]">
          <SearchBox />
        </div>
      </div>

      <div
        className={"max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"}
      >
        {blockedUserList.map((item, index) => (
          <div className="w-[15.7%]">
            <BlockedUser key={index} info={item} />
          </div>
        ))}
        {blockedUserList.map((item, index) => (
          <div className="w-[15.7%]">
            <BlockedUser key={index} info={item} />
          </div>
        ))}
        {blockedUserList.map((item, index) => (
          <div className="w-[15.7%]">
            <BlockedUser key={index} info={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
