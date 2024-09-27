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
    <div className="flex items-center justify-between mt-10">
      <h3 className="font-gilroy-semiBold text-2xl">Feeds</h3>

      <div
        ref={searchBoxRef}
        className="relative"
        onClick={() => setShow(true)}
      >
        <div className="relative z-[1]">
          <input
            placeholder="Search"
            className="w-[400px] border-2 border-border_color rounded-full py-2.5 pl-10 pr-5 focus:outline-[3px] outline-secondary_color placeholder:font-gilroy-reguler"
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
              ? "mt-2 p-3 font-gilroy-semiBold absolute z-0 top-full left-0 border-2 border-border_color w-full rounded-[20px] transition-all ease-linear duration-100 visible opacity-100 translate-y-0"
              : "mt-2 p-3 font-gilroy-semiBold absolute z-0 top-full left-0 border-2 border-border_color w-full rounded-[20px] transition-all ease-linear duration-100 invisible opacity-0 -translate-y-5"
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
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
            <RecentSearchListItem
              image={
                "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
              }
              name={"Monsur Ahmed Shanto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
