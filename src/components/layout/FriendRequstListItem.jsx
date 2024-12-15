import React from "react";

const FriendRequstListItem = ({ type, info, accept, reject }) => {
  return type === "small" ? (
    <div className="flex justify-between items-center p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
      <div className="flex items-center gap-x-2.5">
        <div className="w-[45px] aspect-square rounded-full overflow-hidden">
          <img src={info.image} alt={info.name} className="w-full" />
        </div>

        <div>
          <h2 className="text-[17px] text-primary-text font-medium font-segoe-ui text-ellipsis overflow-hidden line-clamp-1 w-[175px]">
            {info.name}
          </h2>
          <p className="text-[13px] font-medium font-segoe-ui text-tertiary-text">
            1 hours ago
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
  ) : type === "medium" ? (
    <div>medium</div>
  ) : (
    type === "big" && (
      <div
        className={`w-full border border-primaryBorder rounded-md overflow-hidden`}
      >
        <img
          src={info.image}
          alt={info.name}
          className={"w-full aspect-square object-cover"}
        />

        <div className={"pb-2 px-2"}>
          <div className={"h-[54px] flex items-end mt-[2px]"}>
            <h3 className="text-xl font-medium font-segoe-ui text-primary-text ml-1 w-full text-ellipsis overflow-hidden line-clamp-2 capitalize">
              {info.name}
            </h3>
          </div>

          <h3 className=" font-inter text-[14px] ml-1 text-secondary-text">
            10 Mutual Friends
          </h3>

          <button
            onClick={accept}
            className={
              "bg-primary-button w-full py-2 text-white font-semibold rounded-lg mt-1 active:scale-[0.98] transition-all"
            }
          >
            Confirm
          </button>

          <button
            onClick={reject}
            className={
              "bg-secondary-button w-full py-2 text-black font-semibold rounded-lg mt-1 active:scale-[0.98] transition-all"
            }
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default FriendRequstListItem;
