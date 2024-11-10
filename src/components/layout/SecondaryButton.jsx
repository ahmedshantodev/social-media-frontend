import React from "react";

const SecondaryButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-[#e2e5e9] hover:bg-[#d6d9dd] font-inter text-primary-text text-[17px] font-medium py-2 px-4 rounded-md transition-all`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
