import React from "react";
import { RxCross2 } from "react-icons/rx";

const RecentSearchListItem = ({ image, name, onClick }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer p-2 rounded-[10px] relative mr-2 hover:bg-[#f2f2f2] transition-all ease-linear duration-100">
      <div className="w-[50px] aspect-square rounded-full overflow-hidden">
        <img src={image} alt={name} className={`w-full`} />
      </div>

      <h2 className="text-primary-text text-lg font-medium font-poppins text-ellipsis overflow-hidden line-clamp-1 w-[220px]">{name}</h2>

      <RxCross2
        onClick={onClick}
        className="box-content absolute top-2/4 -translate-y-2/4 right-4 p-1 rounded-full text-lg text-secondary_color transition-all ease-linear duration-100 hover:text-black hover:bg-[#d3e3fd] active:scale-[1.1]"
      />
    </div>
  );
};

export default RecentSearchListItem;
