import React from "react";

const ProfileInfoInput = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  className,
  maxLength
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 font-inter">
        {label}
      </label>

      <input
        type={type ? type : "text"}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
      />
    </div>
  );
};

export default ProfileInfoInput;
