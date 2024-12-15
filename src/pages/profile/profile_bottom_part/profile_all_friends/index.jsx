import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FriendListItem from "../../../../components/layout/FriendListItem";
import { friendList } from "../../../../data/friendList";

const ProfileAllFriends = () => {
  const menu = ["all friends", "mutual friends", "friend requsts", "send requsts"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);

  return (
    <div className="w-full bg-white py-4 px-5 mb-10 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div>
        <p className="font-poppins text-xl font-medium">Friends</p>

        <div className="w-full flex items-center justify-between mt-2">
          <div>
            {menu.map((item, index) => (
              <button
                key={index}
                onClick={() => setMenuActiveItem(item)}
                className={
                  menuActiveItem === item
                    ? "py-4 px-5 rounded-lg capitalize font-poppins text-[16px] font-medium text-secondary-text relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[4px] after:rounded-t-lg"
                    : "py-4 px-5 rounded-t-lg capitalize font-poppins text-[16px] font-medium text-secondary-text hover:bg-secondary-bg"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative z-[1]">
            <input
              placeholder="Search"
              className={
                "bg-input-color w-[500px] rounded-full py-2.5 pl-[42px] pr-5 focus:outline-[2px] outline-secondary_color placeholder:font-segoe-ui placeholder:text-[17px] outline-none"
              }
            />

            <FiSearch className="absolute top-2/4 -translate-y-2/4 left-4 text-lg text-secondary-text" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mt-5">
        {friendList.map((item, index) => (
          <div key={index} className="w-[49%]">
            <FriendListItem
              info={item}
              type={"medium"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAllFriends;
