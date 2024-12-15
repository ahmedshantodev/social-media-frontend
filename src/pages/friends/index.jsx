import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdBlock } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import AllFriends from "./AllFriends";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import AddFriends from "./AddFriends";
import FriendRequsts from "./FriendRequsts";
import BlockList from "./BlockedUser";
import SentRequsts from "./SentRequsts";

const friends = () => {
  const menu = [
    {
      icon: FaUserCheck,
      text: "all friends",
    },
    {
      icon: FaUserPlus,
      text: "add friends",
    },
    {
      icon: FaUserPen,
      text: "friend requst",
    },
    {
      icon: FaUserMinus,
      text: "sent requsts",
    },
    {
      icon: MdBlock,
      text: "block list",
    },
  ];
  const [activeMenuItem, setActiveMenuItem] = useState(menu[0].text);

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
              <button
                key={index}
                onClick={() => setActiveMenuItem(item.text)}
                className={
                  item.text == activeMenuItem
                    ? "w-full group bg-[#ededf9] py-2.5 px-3 rounded-md flex items-center justify-between cursor-pointer transition-all ease duration-300 mb-1"
                    : "w-full group hover:bg-[#ededf9] py-2.5 px-3 rounded-md flex items-center justify-between cursor-pointer transition-all ease duration-300 mb-1"
                }
              >
                <div className={"flex items-center gap-x-2"}>
                  <button
                    className={
                      item.text == activeMenuItem
                        ? "box-content text-[25px] p-2 text-black"
                        : "box-content text-[25px] p-2 group-hover:text-black text-secoundaryText transition-all ease duration-300"
                    }
                  >
                    <item.icon />
                  </button>

                  <p
                    className={
                      item.text == activeMenuItem
                        ? "font-inter font-semibold text-black group-hover:text-black text-lg transition-all ease duration-300 capitalize"
                        : "font-inter font-semibold text-secoundaryText group-hover:text-black text-lg transition-all ease duration-300 capitalize"
                    }
                  >
                    {item.text}
                  </p>
                </div>

                <IoIosArrowForward
                  className={
                    item.text == activeMenuItem
                      ? "text-[22px] text-black group-hover:text-black mr-0  transition-all ease duration-300 group-hover:mr-0"
                      : "text-[22px] text-secoundaryText group-hover:text-black mr-2.5  transition-all ease duration-300 group-hover:mr-0"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-[80%] h-full bg-white rounded-2xl px-5 pt-5 pb-10">
          {activeMenuItem === "all friends" ? (
            <AllFriends />
          ) : activeMenuItem === "add friends" ? (
            <AddFriends />
          ) : activeMenuItem === "friend requst" ? (
            <FriendRequsts />
          ) : activeMenuItem === "sent requsts" ? (
            <SentRequsts />
          ) : activeMenuItem === "block list" && (
            <BlockList />
          )}
        </div>
      </section>
    </>
  );
};

export default friends;
