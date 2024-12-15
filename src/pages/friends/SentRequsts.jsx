import React from "react";
import SearchBox from "../../components/layout/SearchBox";
import SentRequstItem from "../../components/layout/SentRequstItem";
import { friendList } from "../../data/friendList";

const SentRequsts = () => {
  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">
          Sent Friend Requst
        </h4>

        <div className="w-[500px]">
          <SearchBox />
        </div>
      </div>

      <div
        className={"max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"}
      >
        {friendList.map((item, index) => (
          <div className="w-[15.7%]">
            <SentRequstItem key={index} info={item} type={"medium"} />
          </div>
        ))}
        {friendList.map((item, index) => (
          <div className="w-[15.7%]">
            <SentRequstItem key={index} info={item} type={"medium"} />
          </div>
        ))}
        {friendList.map((item, index) => (
          <div className="w-[15.7%]">
            <SentRequstItem key={index} info={item} type={"medium"} />
          </div>
        ))}
        {friendList.map((item, index) => (
          <div className="w-[15.7%]">
            <SentRequstItem key={index} info={item} type={"medium"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentRequsts;
