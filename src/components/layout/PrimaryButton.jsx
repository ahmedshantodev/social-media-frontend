import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <button
      className={`${className} bg-primary-button text-white font-poppins text-[17px] py-2 px-4 rounded-md transition-all hover:bg-[#0861f2]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
