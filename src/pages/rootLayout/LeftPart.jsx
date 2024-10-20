import React, { useState } from "react";
import userImage from "/public/remove/shanto.jpg";
import { navmenu } from "../../data/navmenu";
import { shortcutList } from "../../data/shortcutList";
import FriendListItem from "../../components/listItem/FriendListItem";
import GroupListItem from "../../components/listItem/GroupListItem";
import MenuListItem from "../../components/listItem/MenuListItem";
import { IoIosArrowUp } from "react-icons/io";

const LeftPart = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="w-full h-full overflow-y-scroll no-scrollbar pl-3 pr-1 pb-2">
      <div className="w-full pb-2 border-b border-primary-border mt-5">
        <div className="py-2 px-2.5 rounded-[10px] flex items-center gap-x-2.5 hover:bg-[#e4e6e9] transition-all duration-150 ease-linear mb-1">
          <div className="w-[45px] aspect-square rounded-full overflow-hidden border border-border_color">
            <img src={userImage} alt={""} className={`w-full`} />
          </div>

          <h3 className="text-[17px] font-segoe-ui font-medium text-primary-text">
            Monsur Ahmed Shanto
          </h3>
        </div>

        {navmenu.map((item, index) => (
          <MenuListItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
          />
        ))}
      </div>

      <div className="py-2 group">
        <div className="flex items-center justify-between">
          <p className="font-segoe-ui font-semibold text-lg text-secondary-text">
            Your shortcuts
          </p>

          <button className="text-tertiary-text text-[14px] hidden group-hover:block bg-[#e4e6e9] rounded-[6px] px-2.5 py-[2px] font-segoe-ui hover:underline transition-all ease-in-out duration-150">
            Edit
          </button>
        </div>

        <div className="pt-2">
          {shortcutList.map((item, index) =>
            seeMore ? (
              item.type === "friend" ? (
                <FriendListItem image={item.image} name={item.name} />
              ) : (
                <GroupListItem image={item.image} name={item.name} />
              )
            ) : (
              index <= 5 &&
              (item.type === "friend" ? (
                <FriendListItem image={item.image} name={item.name} />
              ) : (
                <GroupListItem image={item.image} name={item.name} />
              ))
            )
          )}

          {seeMore ? (
            <div
              onClick={() => setSeeMore(!seeMore)}
              className="group flex items-center gap-4 cursor-pointer px-2 py-2.5 rounded-[10px] relative hover:bg-[#e4e6e9] transition-all ease-linear duration-100"
            >
              <div className="w-[40px] aspect-square rounded-full overflow-hidden group-hover:bg-white bg-[#e4e6eb] flex items-center justify-center">
                <IoIosArrowUp className="text-[25px] text-primary-text" />
              </div>

              <h2 className="text-secondary-text text-[18px] font-medium font-segoe-ui text-ellipsis overflow-hidden line-clamp-1 w-[220px]">
                See less
              </h2>
            </div>
          ) : (
            <div
              onClick={() => setSeeMore(!seeMore)}
              className="group flex items-center gap-4 cursor-pointer px-2 py-2.5 rounded-[10px] relative hover:bg-[#e4e6e9] transition-all ease-linear duration-100"
            >
              <div className="w-[40px] aspect-square rounded-full overflow-hidden group-hover:bg-white bg-[#e4e6eb] flex items-center justify-center">
                <IoIosArrowUp className="text-[25px] text-primary-text rotate-180" />
              </div>

              <h2 className="text-secondary-text text-[18px] font-medium font-segoe-ui text-ellipsis overflow-hidden line-clamp-1 w-[220px]">
                See more
              </h2>
            </div>
          )}
        </div>
      </div>

      <p className="font-segoe-ui font-semibold text-[13px] text-secondary-text px-2.5 text-center">
        Monsur Ahmed Shanto © 2024
      </p>
    </div>
  );
};

export default LeftPart;
