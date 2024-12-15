import React from "react";
import SecondaryButton from "../../../../../components/layout/SecondaryButton";

const ProfileAllFriends = ({ profileInfo, setMenuActiveItem }) => {
  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 mt-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <p className="font-poppins text-xl font-medium">
        Friends{" "}
        <span className="text-secondary-text text-base">(290 friends)</span>
      </p>

      <div className="flex flex-wrap mt-4 overflow-hidden gap-x-[9px] gap-y-4">
        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>

        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>

        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>

        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>

        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>

        <div className="w-[32%]">
          <img
            src="http://localhost:5173/public/remove/userOne.png"
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
          />

          <p className="font-medium line-clamp-1">Rayhand Ahmed Siam</p>
        </div>
      </div>

      <SecondaryButton
        onClick={() => setMenuActiveItem("friends")}
        className={`w-full mt-3`}
      >
        See all
      </SecondaryButton>
    </div>
  );
};

export default ProfileAllFriends;
