import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import RecentSearchListItem from "../../components/layout/RecentSearchListItem";
import OutSideClick from "../../functions/click";
import rippleLogo from "/public/images/ripple-logo.png";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  const searchBoxRef = useRef();
  const [show, setShow] = useState(false);

  OutSideClick(searchBoxRef, () => {
    setShow(false);
  });

  return (
    <div className="flex items-center justify-between bg-white px-5 py-3 relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <div className="flex items-center gap-1">
        <div>
          <img src={rippleLogo} alt="ripple-logo" className="w-[45px]" />
        </div>

        <h3 className="text-xl font-medium font-poppins ml-2">Ripple</h3>
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
                ? "bg-[#f0f2f5] w-[700px] rounded-full py-2.5 pl-10 pr-5 focus:outline-[2px] outline-[#848f95] placeholder:font-gilroy-reguler"
                : "bg-[#f0f2f5] w-[700px] rounded-full py-2.5 pl-10 pr-5 focus:outline-[2px] outline-secondary_color placeholder:font-gilroy-reguler"
            }
          />

          <FiSearch className="absolute top-2/4 -translate-y-2/4 left-4 text-lg text-secondary_color" />
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
              ? "absolute z-0 top-full left-0 bg-white p-4 mt-5 w-full rounded-[16px] font-gilroy-semiBold  visible opacity-100 translate-y-0 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              : "absolute z-0 top-full left-0 bg-white p-4 mt-5 w-full rounded-[16px] font-gilroy-semiBold  invisible opacity-0 -translate-y-5 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          }
        >
          <p className="font-inter text-title_color ml-2">Recent Searches :</p>

          <div className="mt-2 min-h-[70px] max-h-[400px] overflow-y-auto">
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/460025155_1204060104249308_2825625522209760280_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SNsjc9wa1kEQ7kNvgFtx4NP&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AT1JjX0jpu57WASk_S1vDWU&oh=00_AYBHM_T3RE016VWRkK_DOrV9oisDzJUNms8puHcAJeGezQ&oe=66FCC6FE"
              }
              name={"Rayhan Ahmed Siam"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/435545735_964632115143688_8511688179507127314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MO2b7n2fSfIQ7kNvgGwcTf8&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AiAZkeB8UMAAzN2duVQUs2Z&oh=00_AYDRVSpnSFdtQWxCgbFV0r5NwmDS5sdThlzE_zEjAAIeSw&oe=66FCA9BB"
              }
              name={"Farhad Hossain Mamun"}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-2.5">
        <button className="bg-[#e4e6eb] rounded-full p-2.5">
          <FaFacebookMessenger className="text-[25px]"/>
        </button>

        <button className="bg-[#e4e6eb] rounded-full p-2">
          <IoMdNotifications className="text-[29px]"/>
        </button>

        <div>
          <img
            src={
              "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&oh=00_AYC8O7SxBLpsSXxcG0G-OmkugIrn7wkOJNmgvEa9txm-dQ&oe=66FE1EA4"
            }
            alt="ripple-logo"
            className="w-[45px] aspect-square rounded-full box-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
