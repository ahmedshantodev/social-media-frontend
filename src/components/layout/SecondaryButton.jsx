import React from "react";

import { ColorRing } from "react-loader-spinner";
const SecondaryButton = ({ onClick, className, isLoading, children }) => {
  return isLoading ? (
    <button
      className={`${className} h-[45px] flex items-center justify-center gap-x-[6px] px-5 bg-[#d6d9dd] rounded-md cursor-not-allowed`}
    >
      <ColorRing
        visible={true}
        height="42"
        width="42"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
      />
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`${className} h-[45px] flex items-center justify-center gap-x-[6px] px-4 bg-[#e2e5e9] hover:bg-[#d6d9dd] font-inter text-primary-text text-[17px] font-medium rounded-md`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
