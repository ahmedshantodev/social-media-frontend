import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ onChange }) => {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        placeholder="Search"
        className={
          "w-full bg-input-color rounded-full py-2.5 pl-[42px] pr-5 focus:outline-[2px] outline-secondary-border placeholder:font-segoe-ui placeholder:text-[17px]"
        }
      />

      <FiSearch className="absolute top-2/4 -translate-y-2/4 left-4 text-lg text-secondary-text" />
    </div>
  );
};

export default SearchBox;
