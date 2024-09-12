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
          ? "border border-[#dc2626] font-poppins text-text_color placeholder:font-poppins placeholder:text-[#dc2626] focus:outline-1 focus:outline-[#dc2626] py-[17px] px-7 rounded-[8px]"
          : "border border-[#cacad8] font-poppins text-text_color placeholder:font-poppins placeholder:text-[#9e949c] focus:outline-1 focus:outline-[#dddcea] py-[17px] px-7 rounded-[8px]"
      }`}
    />
  );
};

export default Input;
