import React from "react";

const FriendRequstListItem = ({ image, name, time, accept, reject }) => {
  return (
    <div className="flex justify-between items-center p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
      <div className="flex items-center gap-x-2.5">
        <div className="w-[45px] aspect-square rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full" />
        </div>

        <div>
          <h2 className="text-base text-primary-text font-medium font-poppins text-ellipsis overflow-hidden line-clamp-1 w-[155px]">
            {name}
          </h2>
          <p className="text-sm font-medium font-gilroy-medium text-tertiary-text">
            {time}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={accept}
          className="text-sm bg-black text-white px-3 py-[5px] rounded-full font-gilroy-medium mr-1"
        >
          Accept
        </button>
        <button
          onClick={reject}
          className="text-sm bg-red-600 text-white px-3 py-[5px] rounded-full font-gilroy-medium"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequstListItem;
