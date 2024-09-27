import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import RecentSearchListItem from "../../components/layout/RecentSearchListItem";
import OutSideClick from "../../functions/click";

const Header = () => {
  const searchBoxRef = useRef();
  const [show, setShow] = useState(false);

  OutSideClick(searchBoxRef, () => {
    setShow(false);
  });

  return (
    <div className="flex items-center justify-between bg-[#f0f2f5] px-3 py-3 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <h3 className="font-gilroy-semiBold text-2xl ml-2">Feeds</h3>

      <div
        ref={searchBoxRef}
        className="relative"
        onClick={() => setShow(true)}
      >
        <div className="relative z-[1]">
          <input
            placeholder="Search"
            className={
              show
                ? "w-[400px] border border-[#848f95] rounded-full py-2.5 pl-10 pr-5 focus:outline-[3px] outline-[#848f95] placeholder:font-gilroy-reguler"
                : "w-[400px] border border-[#cacad8] rounded-full py-2.5 pl-10 pr-5 focus:outline-[3px] outline-secondary_color placeholder:font-gilroy-reguler"
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
              ? "mt-1 p-3 font-gilroy-semiBold absolute z-0 top-full left-0 bg-white border-2 border-[#848f95] w-full rounded-[20px] transition-all ease-linear duration-100 visible opacity-100 translate-y-0"
              : "mt-1 p-3 font-gilroy-semiBold absolute z-0 top-full left-0 bg-white border-2 border-[#848f95] w-full rounded-[20px] transition-all ease-linear duration-100 invisible opacity-0 -translate-y-5"
          }
        >
          <p className="font-inter text-title_color">Recent Searches :</p>

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
    </div>
  );
};

export default Header;
