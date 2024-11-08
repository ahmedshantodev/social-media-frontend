import React from "react";

const SecondaryButton = ({ className, children }) => {
  return (
    <button
      className={`${className} bg-[#e2e5e9] hover:bg-[#d6d9dd] text-primary-text text-[17px] font-medium py-2 px-4 rounded-md transition-all`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
