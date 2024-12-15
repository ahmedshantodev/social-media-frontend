import React from "react";

import { ColorRing } from "react-loader-spinner";
const SecondaryButton = ({ onClick, className, isLoading, children }) => {
  return isLoading ? (
    <button
      className={`${className} bg-[#d6d9dd] font-inter text-primary-text text-[17px] font-medium px-12 rounded-md cursor-not-allowed`}
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
      className={`${className} bg-[#e2e5e9] hover:bg-[#d6d9dd] font-inter text-primary-text text-[17px] font-medium py-2 px-4 rounded-md transition-all`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
