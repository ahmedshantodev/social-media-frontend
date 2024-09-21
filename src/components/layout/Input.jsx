import React from "react";

const Input = ({
  type,
  id,
  onChange,
  value,
  name,
  placeholder,
  error,
  className,
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type ? type : "text"}
      placeholder={placeholder}
      className={`${className} ${
        error
          ? "border border-[#dc2626] font-poppins text-text_color placeholder:font-poppins placeholder:text-[#dc2626] placeholder:text-[12px] md:placeholder:text-[13px] lg:placeholder:text-xs xl:placeholder:text-sm 2xl:placeholder:text-base focus:outline-1 focus:outline-[#dc2626] py-2 2xl:py-[17px] px-4 md:px-5 2xl:px-7 rounded-[8px]"
          : "border border-[#cacad8] font-poppins text-text_color placeholder:font-poppins placeholder:text-[#9e949c] placeholder:text-[12px] md:placeholder:text-[13px] lg:placeholder:text-xs xl:placeholder:text-sm 2xl:placeholder:text-base focus:outline-1 focus:outline-[#dddcea] py-2 2xl:py-[17px] px-4 md:px-5 2xl:px-7 rounded-[8px]"
      }`}
    />
  );
};

export default Input;
