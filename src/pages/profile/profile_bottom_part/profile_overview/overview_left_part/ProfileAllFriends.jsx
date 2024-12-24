import React from "react";
import SecondaryButton from "../../../../../components/layout/SecondaryButton";
import { Link } from "react-router-dom";

const ProfileAllFriends = ({
  friendList,
  profileVisitor,
  setMenuActiveItem,
}) => {
  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 mt-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <p className="font-poppins text-xl font-medium">
        Friends{" "}
        <span className="text-secondary-text text-base">
          ({friendList.length})
        </span>
      </p>

      <div className="flex flex-wrap mt-4 overflow-hidden gap-x-[9px] gap-y-4">
        {friendList?.map((item) => (
          <Link to={`/${item.username}`} className="block w-[32%]">
            <img
              src={item.profilePicture}
              alt={item.fullName}
              className="w-full aspect-square object-cover rounded-lg"
            />

            <Link
              to={`/${item.username}`}
              className="font-medium line-clamp-1 hover:underline"
            >
              {item.fullName}
            </Link>
          </Link>
        ))}
      </div>

      {profileVisitor ? (
        <SecondaryButton
          onClick={() => setMenuActiveItem("friends")}
          className={`w-full mt-3`}
        >
          See all
        </SecondaryButton>
      ) : (
        <Link to={`/friends/all-friends`}>
          <SecondaryButton
            onClick={() => setMenuActiveItem("friends")}
            className={`w-full mt-3`}
          >
            See all
          </SecondaryButton>
        </Link>
      )}
    </div>
  );
};

export default ProfileAllFriends;
