import React from "react";

const GroupListItem = ({image , name}) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer p-2 rounded-[10px] relative hover:bg-[#e4e6e9] transition-all ease-linear duration-100">
      <div className="w-[45px] aspect-square rounded-[10px] overflow-hidden">
        <img src={image} alt={name} className={`w-full`} />
      </div>

      <h2 className="text-primary-text text-[18px] font-medium font-segoe-ui text-ellipsis overflow-hidden line-clamp-1 w-[220px]">
        {name}
      </h2>
    </div>
  );
};

export default GroupListItem;
