import React from "react";
import { navmenu } from "../../data/navmenu";
import MenuListItem from "../../components/listItem/MenuListItem";
import userImage from "/public/remove/shanto.jpg";
import { shortcutList } from "../../data/shortcutList";
import ShortcutListItem from "../../components/listItem/ShortcutListItem";

const LeftPart = () => {
  return (
    <div className="w-full">
      <div className="w-full pb-2 border-b border-primary-border">
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
          <p className="font-segoe-ui font-semibold text-[19px] text-secondary-text">
            Your shortcuts
          </p>

          <button className="text-tertiary-text hidden group-hover:block bg-[#e4e6e9] rounded-[6px] px-2.5 py-[2px] font-segoe-ui transition-all ease-in-out duration-150">
            Edit
          </button>
        </div>

        <div className="pt-2">
          {shortcutList.map((item, index) => (
            <ShortcutListItem key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </div>

      <p className="font-segoe-ui font-semibold text-[13px] text-secondary-text px-2.5">
        Monsur Ahmed Shanto © 2024
      </p>
    </div>
  );
};

export default LeftPart;
