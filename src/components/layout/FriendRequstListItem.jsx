import React from "react";

const FriendRequstListItem = ({ image, name, time, accept, reject }) => {
  return (
    <div className="flex justify-between items-center p-2 rounded-[10px] cursor-pointer hover:bg-[#e4e6e9] transition-all duration-150 ease-linear">
      <div className="flex items-center gap-x-2.5">
        <div className="w-[50px] aspect-square rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full" />
        </div>

        <div>
          <h2 className="text-base font-medium font-poppins text-ellipsis overflow-hidden line-clamp-1 w-[180px]">{name}</h2>
          <p className="text-sm font-medium font-gilroy-medium text-single_color">
            {time}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={accept}
          className="text-[15px] bg-black text-white px-4 py-[7px] rounded-full font-gilroy-medium mr-1"
        >
          Accept
        </button>
        <button
          onClick={reject}
          className="text-[15px] bg-red text-white px-4 py-[7px] rounded-full font-gilroy-medium"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequstListItem;
