import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import RecentSearchListItem from "../listItem/RecentSearchListItem";
import OutSideClick from "../../functions/click";
import rippleLogo from "/public/images/ripple-logo.png";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import userImage from "/public/remove/shanto.jpg";
import { recentSearchList } from "../../data/recentSearchList";

const Header = () => {
  const searchBoxRef = useRef();
  const [show, setShow] = useState(false);

  OutSideClick(searchBoxRef, () => {
    setShow(false);
  });

  return (
    <div className="flex items-center justify-between bg-primary-bg px-5 py-3 relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="flex items-center gap-1">
        <div>
          <img src={rippleLogo} alt="ripple-logo" className="w-[45px]" />
        </div>

        <h3 className="text-xl font-medium font-poppins ml-2 text-primary-text">
          Ripple
        </h3>
      </div>

      <div
        ref={searchBoxRef}
        className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-30"
        onClick={() => setShow(true)}
      >
        <div className="relative z-[1]">
          <input
            placeholder="Search"
            className={
              show
                ? "bg-input-color w-[700px] rounded-full py-2.5 pl-10 pr-5 focus:outline-[2px] outline-[#848f95] placeholder:font-gilroy-reguler"
                : "bg-input-color w-[700px] rounded-full py-2.5 pl-10 pr-5 focus:outline-[2px] outline-secondary_color placeholder:font-gilroy-reguler"
            }
          />

          <FiSearch className="absolute top-2/4 -translate-y-2/4 left-4 text-lg text-secondary-text" />
          {show && (
            <RxCross2
              onClick={() => setShow(false)}
              className="box-content absolute top-2/4 -translate-y-2/4 right-4 p-1 rounded-full text-lg text-secondary_color transition-all ease-linear duration-100 hover:text-black hover:bg-[#d3e3fd] active:scale-[1.1] cursor-pointer"
            />
          )}
        </div>

        <div
          className={
            show
              ? "absolute z-0 top-full left-2/4 -translate-x-2/4 bg-white p-4 mt-5 w-[110%] rounded-[16px] font-gilroy-semiBold  visible opacity-100 translate-y-0 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              : "absolute z-0 top-full left-2/4 -translate-x-2/4 bg-white p-4 mt-5 w-[110%] rounded-[16px] font-gilroy-semiBold  invisible opacity-0 -translate-y-5 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          }
        >
          <p className="font-inter text-secondary-text ml-2">
            Recent Searches :
          </p>

          <div className="mt-2 min-h-[70px] max-h-[400px] overflow-y-auto">
            {recentSearchList.map((item, index) => (
              <RecentSearchListItem
                key={index}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-2.5">
        <button className="bg-[#e4e6eb] rounded-full p-2.5">
          <FaFacebookMessenger className="text-[25px]" />
        </button>

        <button className="bg-[#e4e6eb] rounded-full p-2">
          <IoMdNotifications className="text-[29px]" />
        </button>

        <div>
          <img
            src={userImage}
            alt="ripple-logo"
            className="w-[45px] aspect-square rounded-full box-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
