import React from "react";
import { Link } from "react-router-dom";

const BlockListItem = ({ info }) => {
  return (
    <div className={`w-full border rounded-md overflow-hidden`}>
      <div>
        <img
          src={info.image}
          alt={info.name}
          className={"w-full aspect-square object-cover cursor-pointer"}
        />
      </div>

      <div className={"pt-2.5 pb-2 px-2"}>
        <Link
          to={"/username"}
          className="inline-block font-inter font-semibold text-[18px] mt-2.5 mb-[2px] ml-1 w-[98%] whitespace-nowrap overflow-hidden text-ellipsis capitalize hover:underline"
        >
          {info.name}
        </Link>

        <button
          className={
            "bg-[#4e4f50] w-full py-2.5 text-white font-semibold rounded-lg mt-1 active:scale-[0.97]"
          }
        >
          Unblock
        </button>
      </div>
    </div>
  );
};

export default BlockListItem;
