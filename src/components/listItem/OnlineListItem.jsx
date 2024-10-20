import React from "react";

const OnlineListItem = ({ image, name }) => {
  return (
    <div className="flex items-center gap-x-2.5 p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
      <div className="relative">
        <div className="w-[40px] aspect-square rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="box-content bg-[#31a24c] w-[10px] aspect-square rounded-full border-2 border-white absolute top-[70%] left-[70%]" />
      </div>

      <h2 className="text-[17px] font-medium font-segoe-ui text-primary-text">
        {name}
      </h2>
    </div>
  );
};

export default OnlineListItem;
