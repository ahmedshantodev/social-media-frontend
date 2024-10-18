import React from "react";
import { navmenu } from "../../data/navmenu";
import MenuListItem from "../../components/listItem/MenuListItem";
import userImage from "/public/remove/shanto.jpg";

const LeftPart = () => {
  return (
    <div className="w-full cursor-pointer">
      <div className="py-2 px-2.5 rounded-[10px] flex items-center gap-x-2.5 hover:bg-[#e4e6e9] transition-all duration-150 ease-linear mb-1">
        <div className="w-[45px] aspect-square rounded-full overflow-hidden border border-border_color">
          <img
            src={userImage}
            alt={""}
            className={`w-full`}
          />
        </div>

        <h3 className="text-base font-medium font-poppins text-primary-text">
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
  );
};

export default LeftPart;
