import React from "react";
import { NavLink } from "react-router-dom";

const MenuListItem = ({ key, icon, text, path }) => {
  let Icon = icon;
  return (
    <NavLink
      key={key}
      to={path}
      className={({ isActive }) =>
        isActive
          ? "group flex items-center gap-4 mb-6 px-6 py-3 rounded-full cursor-pointer bg-black !text-white transition-all ease-linear duration-100"
          : "group flex items-center gap-4 mb-6 px-6 py-3 rounded-full cursor-pointer hover:bg-black transition-all ease-linear duration-100"
      }
    >
      <div className="group-hover:text-white transition-all ease-linear duration-100">
        <Icon className="text-red" />
      </div>
      <div className="font-gilroy-medium text-[19px] group-hover:text-white transition-all ease-linear duration-100">
        {text}
      </div>
    </NavLink>
  );
};

export default MenuListItem;
