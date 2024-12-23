import React from "react";
import { Helmet } from "react-helmet-async";
import { MdBlock } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const friends = () => {
  const menu = [
    {
      icon: FaUserCheck,
      text: "all friends",
      path: "/friends/all-friends",
    },
    {
      icon: FaUserPlus,
      text: "add friends",
      path: "/friends/add-friends",
    },
    {
      icon: FaUserPen,
      text: "friend requst",
      path: "/friends/friend-requst",
    },
    {
      icon: FaUserMinus,
      text: "sent requsts",
      path: "/friends/sent-requst",
    },
    {
      icon: MdBlock,
      text: "block list",
      path: "/friends/blocked-user",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ripple | Friends</title>
      </Helmet>

      <section className="w-[100%] h-full py-5 px-4 flex items-start gap-x-5">
        <div
          className={
            "w-[20%] h-full bg-white rounded-2xl pt-4 px-4 pb-5 overflow-hidden"
          }
        >
          <div className={"px-2.5 pb-4"}>
            <h4 className="font-bold text-[24px]">Friends</h4>
          </div>

          <div>
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "w-full group bg-[#ededf9] py-2.5 px-3 rounded-md flex items-center justify-between cursor-pointer transition-all ease duration-300 mb-1"
                    : "w-full group hover:bg-[#ededf9] py-2.5 px-3 rounded-md flex items-center justify-between cursor-pointer transition-all ease duration-300 mb-1"
                }
              >
                <div className={"flex items-center gap-x-2"}>
                  <button
                    className={`box-content text-[25px] p-2 group-hover:text-black text-secoundaryText transition-all ease duration-300`}
                  >
                    <item.icon />
                  </button>

                  <p
                    className={`font-inter font-semibold text-secoundaryText group-hover:text-black text-lg transition-all ease duration-300 capitalize`}
                  >
                    {item.text}
                  </p>
                </div>

                <IoIosArrowForward
                  className={`text-[22px] text-secoundaryText group-hover:text-black mr-2.5s transition-all ease duration-300 sgroup-hover:mr-0`}
                />
              </NavLink>
            ))}
          </div>
        </div>

        <div className="w-[80%] h-full bg-white rounded-2xl px-5 pt-5 pb-10">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default friends;
