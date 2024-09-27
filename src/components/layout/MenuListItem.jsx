import React from "react";
import { NavLink } from "react-router-dom";

const MenuListItem = ({ index, icon, text, path }) => {
  
  let Icon = icon;
  return (
    <NavLink
      key={index}
      to={path}
      className={({ isActive }) =>
        isActive
          ? "group flex items-center gap-4 mb-5 px-6 py-3 rounded-full cursor-pointer bg-black !text-white transition-all ease-linear duration-100"
          : "group flex items-center gap-4 mb-5 px-6 py-3 rounded-full cursor-pointer hover:bg-black transition-all ease-linear duration-100"
      }
    >
      <div className="group-hover:text-white transition-all ease-linear duration-100">
        <Icon />
      </div>
      <div className="font-gilroy-medium text-[18px] group-hover:text-white transition-all ease-linear duration-100">
        {text}
      </div>
    </NavLink>
  );
};

export default MenuListItem;
