import React from "react";
import { ColorRing } from "react-loader-spinner";

const PrimaryButton = ({ onClick, className, children, isLoading }) => {
  return isLoading ? (
    <button
      className={`${className} h-[45px] flex items-center justify-center gap-x-[6px] px-5 bg-primary-button text-white font-inter text-[17px] rounded-md hover:bg-[#0861f2]`}
    >
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
      />
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`${className} h-[45px] flex items-center justify-center gap-x-[6px] px-4 bg-primary-button text-white font-inter text-[17px] rounded-md hover:bg-[#0861f2]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
