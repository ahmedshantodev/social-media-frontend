import React from "react";
import { FaUserXmark, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const UserList = ({ type, info }) => {
  return type === "skeleton" ? (
    <div className="w-full border rounded-md overflow-hidden ">
      <Skeleton type={`image`} className={`w-full aspect-square`} />

      <div className="px-2 pb-2">
        <div className="h-[54px] flex items-end mt-[2px]">
          <Skeleton type={`box`} className={`w-full h-5`} />
        </div>

        <Skeleton type={`box`} className={`w-full h-[14px] mt-[6px]`} />

        <Skeleton type={`box`} className={`w-full h-[45px] mt-1 rounded-lg`} />
      </div>
    </div>
  ) : (
    <div className={`w-full border rounded-md overflow-hidden`}>
      <Link to={`/${info.username}`}>
        <div className="w-full aspect-square">
          <img
            src={info.profilePicture}
            alt={info.username}
            className={"w-full h-full object-cover"}
          />
        </div>
      </Link>

      <div className={"pb-2 px-2"}>
        <div className={"h-[54px] flex items-end mt-[2px]"}>
          <Link
            to={`/${info.username}`}
            className="inline-block text-xl font-medium font-segoe-ui text-primary-text ml-1 w-full text-ellipsis overflow-hidden line-clamp-2 capitalize hover:underline"
          >
            {info.firstName + " " + info.lastName}
          </Link>
        </div>

        <p className=" font-inter text-[14px] ml-1 text-secondary-text">
          10 Mutual Friends
        </p>

        {info.state == "pending" ? (
          <button
            className={
              "bg-secondary-button text-black w-full py-2.5 font-medium rounded-lg mt-1 active:scale-[0.98] flex justify-center items-center gap-x-2.5 transition-all"
            }
          >
            <FaUserXmark className="text-lg" /> Cancel Requst
          </button>
        ) : (
          <button
            className={
              "bg-primary-button w-full py-2.5 text-white font-medium rounded-lg mt-1 active:scale-[0.98] flex justify-center items-center gap-x-2.5 transition-all"
            }
          >
            <FaUserPlus className="text-lg" /> Send Requsts
          </button>
        )}
      </div>
    </div>
  );
};

export default UserList;
