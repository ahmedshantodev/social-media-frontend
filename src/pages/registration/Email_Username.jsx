import React from "react";
import Input from "../../components/layout/Input";

const Email_Username = ({ activeItem, info, error, onChange }) => {
  return (
    <div
      className={
        activeItem === 3
          ? "absolute top-0 left-0 w-full px-2 translate-x-0 transition-all duration-300 ease-in-out"
          : activeItem === 4 || activeItem === 5
          ? "absolute top-0 left-0 w-full px-2 -translate-x-full transition-all duration-300 ease-in-out"
          : "absolute top-0 left-0 w-full px-2 translate-x-full transition-all duration-300 ease-in-out"
      }
    >
      <Input
        type={`text`}
        id={`email`}
        name={`email`}
        label={`Email`}
        error={error.email}
        onChange={onChange}
        value={info.email}
        className={`w-full mb-5`}
        placeholder={`Enter your email`}
      />

      <Input
        type={`text`}
        id={`name`}
        name={`username`}
        label={`Username`}
        className={`w-full`}
        onChange={onChange}
        value={info.username.toLowerCase().split(" ").join("")}
        error={error.username}
        placeholder={`Enter your username`}
      />
    </div>
  );
};

export default Email_Username;
