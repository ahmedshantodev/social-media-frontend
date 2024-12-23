import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../layout/SecondaryButton";
import Skeleton from "./Skeleton";

const BlockListItem = ({ type, info }) => {
  return type === "skeleton" ? (
    <div className="w-full border rounded-md overflow-hidden ">
      <Skeleton type={`image`} className={`w-full aspect-square`} />

      <div className="pt-3 pb-2.5 px-2">
        <Skeleton type={`box`} className={`w-full h-5 mt-2.5 mb-3`} />

        <Skeleton type={`box`} className={`w-full h-[45px] rounded-lg`} />
      </div>
    </div>
  ) : (
    <div className={`w-full border rounded-md overflow-hidden`}>
      <Link to={"/username"}>
        <img
          src={info.image}
          alt={info.name}
          className={"w-full aspect-square object-cover cursor-pointer"}
        />
      </Link>

      <div className={"pt-2.5 pb-2 px-2"}>
        <Link
          to={"/username"}
          className="inline-block font-inter font-semibold text-[18px] mt-2.5 mb-[2px] ml-1 w-[98%] whitespace-nowrap overflow-hidden text-ellipsis capitalize hover:underline"
        >
          {info.name}
        </Link>

        <SecondaryButton className={`w-full !font-semibold`}>
          Unblock
        </SecondaryButton>
      </div>
    </div>
  );
};

export default BlockListItem;
