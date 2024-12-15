import React from "react";
import reactionData from "./reactionData";

const ReactionPicker = () => {
  return (
    <div
      id="reaction-picker"
      className="hidden bg-white absolute bottom-full left-0 group-hover:flex items-center gap-x-2 py-2.5 px-3 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden opacity-0 group-hover:opacity-1"
    >
      {reactionData.map((item, index) => (
        <button
          key={index}
          className="relative w-[40px] aspect-square hover:scale-[1.3] hover:-translate-y-1 transition-all duration-150 ease-in"
        >
          <img
            title={item.name}
            src={item.animatedEmoji}
            alt={item.name}
            className="box-content w-full"
          />
        </button>
      ))}
    </div>
  );
};

export default ReactionPicker;
