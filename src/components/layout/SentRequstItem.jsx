import React from "react";
import { FaUserXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SentRequstItem = ({ info }) => {
  return (
    <div className={`border rounded-md overflow-hidden`}>
      <div className="w-full aspect-square">
        <img src={info.image} alt={info.name} className={"w-full h-full obc"} />
      </div>

      <div className={"pb-2 px-2"}>
        <div className={"h-[54px] flex items-end mt-[2px]"}>
          <Link
            to={"/username"}
            className="inline-block text-xl font-medium font-segoe-ui text-primary-text ml-1 w-full text-ellipsis overflow-hidden line-clamp-2 capitalize hover:underline"
          >
            {info.name}
          </Link>
        </div>

        <p className=" font-inter text-[14px] ml-1 text-secondary-text">
          10 Mutual Friends
        </p>

        <button
          className={
            "bg-secondary-button text-black w-full py-2.5 font-medium rounded-lg mt-1 active:scale-[0.98] flex justify-center items-center gap-x-2.5 transition-all"
          }
        >
          <FaUserXmark className="text-lg" /> Cancel Requst
        </button>
      </div>
    </div>
  );
};

export default SentRequstItem;
