import React from "react";

const FriendRequstListItem = ({ image, name, time, accept, reject }) => {
  return (
    <div className="flex justify-between items-center p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
      <div className="flex items-center gap-x-2.5">
        <div className="w-[45px] aspect-square rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full" />
        </div>

        <div>
          <h2 className="text-[17px] text-primary-text font-medium font-segoe-ui text-ellipsis overflow-hidden line-clamp-1 w-[175px]">
            {name}
          </h2>
          <p className="text-[13px] font-medium font-segoe-ui text-tertiary-text">
            {time}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={accept}
          className="text-[15px] bg-black text-white px-[14px] py-[4px] rounded-full font-segoe-ui mr-1"
        >
          Accept
        </button>
        <button
          onClick={reject}
          className="text-[15px] bg-red-600 text-white px-[14px] py-[4px] rounded-full font-segoe-ui"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequstListItem;
