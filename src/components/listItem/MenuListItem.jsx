import React from "react";
import { NavLink } from "react-router-dom";

const MenuListItem = ({ icon, text, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "py-2 px-2.5 rounded-[10px] flex items-center gap-x-2.5 bg-[#e4e6e9] transition-all duration-150 ease-linear mb-1"
          : "py-2 px-2.5 rounded-[10px] flex items-center gap-x-2.5 hover:bg-[#e4e6e9] transition-all duration-150 ease-linear mb-1"
      }
    >
      <div className="w-[38px] aspect-square relative overflow-hidden ">
        <img src={icon} alt={text} className={`w-full`} />
      </div>

      <p className="text-base font-medium font-poppins text-primary-text">{text}</p>
    </NavLink>
  );
};

export default MenuListItem;
