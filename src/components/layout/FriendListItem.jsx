import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const FriendListItem = ({ type, info }) => {
  return type === "small" ? (
    <div>
      <div className="flex items-center gap-x-2.5 p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
        <div className="relative">
          <div className="w-[45px] aspect-square rounded-full overflow-hidden border">
            <img
              src={info.image}
              alt={info.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="box-content bg-[#31a24c] w-[10px] aspect-square rounded-full border-2 border-white absolute top-[70%] left-[70%]" />
        </div>

        <h2 className="text-[17px] font-medium font-segoe-ui text-primary-text">
          {info.name}
        </h2>
      </div>
    </div>
  ) : type === "medium" ? (
    <div
      className={`bg-white border border-primary-border/50 rounded-[6px] p-4 flex items-center gap-x-5`}
    >
      <div className="w-[17%] aspect-square rounded-[6px] overflow-hidden border cursor-pointer">
        <img
          src={info.image}
          alt={info.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[83%] flex items-center justify-between">
        <div>
          <Link
            to={"/username"}
            className="text-[19px] font-medium font-segoe-ui text-primary-text hover:underline"
          >
            {info.name}
          </Link>

          <p className="text-secondary-text font-inter text-sm leading-none hover:underline cursor-pointer">
            80 mutual friends
          </p>
        </div>

        <button className="bg-whtie hover:bg-secondary-bg text-secondary-text text-[22px] box-content p-2 rounded-full transition-all">
          <HiDotsHorizontal />
        </button>
      </div>
    </div>
  ) : (
    <div
      className={`w-full border border-[#dedede] rounded-md flex justify-between items-center p-2.5 transition-all ease-in-out duration-200`}
    >
      <div className="flex items-center">
        <img
          src={info.image}
          alt={info.name}
          className={"w-[100px] aspect-square object-cover rounded-lg"}
        />

        <div className={""}>
          <h3
            className="font-inter font-semibold text-[20px] ml-3"
          >
            {info.name}
          </h3>

          <h3

            className="font-inter text-[15px] ml-3 text-secoundaryText"
          >
            100 Mutual Friends
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FriendListItem;
