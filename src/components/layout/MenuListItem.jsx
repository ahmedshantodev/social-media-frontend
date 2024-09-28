import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";

const MenuListItem = ({ index, icon, text, path }) => {
  return (
    <NavLink
      key={index}
      to={path}
      className={({ isActive }) =>
        isActive
          ? "py-2.5 px-2.5 rounded-[10px] flex items-center gap-x-2.5 bg-[#e4e6e9] transition-all duration-150 ease-linear mb-2"
          : "py-2.5 px-2.5 rounded-[10px] flex items-center gap-x-2.5 bg-[#e4e6e9] transition-all duration-150 ease-linear mb-2"
      }
    >
      <div className="w-[40px] aspect-square relative overflow-hidden ">
        <Image src={icon} alt={text} className={`w-full`} />
      </div>

      <p className="text-base font-medium font-poppins">{text}</p>
    </NavLink>
  );
};

export default MenuListItem;
