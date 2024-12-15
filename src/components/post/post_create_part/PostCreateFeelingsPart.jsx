import React from "react";
import { feelingsList } from "../../../data/feelingsList";

const PostCreateFeelingsPart = ({ setFeelings, setFeelingSelectorShow }) => {
  const handleFeelingSelect = (item) => {
    setFeelings(item);
    setFeelingSelectorShow(false);
  };

  return (
    <div className="w-full border border-primary-border rounded-[6px] px-3 py-2 mt-2">
      <h2 className="text-[18px] font-segoe-ui font-medium text-secondary-text mb-2">
        Feelings:
      </h2>

      <div className="flex justify-between flex-wrap gap-[6px]">
        {feelingsList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFeelingSelect(item)}
            className="bg-gray-100 hover:bg-secondary-bg w-[32.5%] px-2 py-2 rounded-[6px] flex items-center gap-x-2 cursor-pointer"
          >
            <p className="text-2xl bg-[#e4e6eb] p-1 rounded-full">
              {item.emoji}
            </p>
            <p className="text-[18px] font-segoe-ui font-light">
              {item.feeling}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCreateFeelingsPart;
