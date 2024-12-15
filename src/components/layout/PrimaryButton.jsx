import React from "react";
import { ColorRing } from "react-loader-spinner";

const PrimaryButton = ({ onClick, className, children, isLoading }) => {
  return isLoading ? (
    <button
      onClick={onClick}
      className={`${className} bg-primary-button text-white font-inter text-[17px] px-12 rounded-md hover:bg-[#0861f2]`}
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
      className={`${className} bg-primary-button text-white font-inter text-[17px] py-2 px-4 rounded-md hover:bg-[#0861f2]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
