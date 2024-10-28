import React from "react";
import Input from "../../components/layout/Input";

const Name = ({ activeItem, error, onChange }) => {
  return (
    <div
      className={
        activeItem === 2 || activeItem === 3 || activeItem === 4 || activeItem === 5
          ? "absolute top-0 left-0 w-full px-2 -translate-x-full transition-all duration-300 ease-in-out"
          : "absolute top-0 left-0 w-full px-2 translate-x-0 transition-all duration-300 ease-in-out"
      }
    >
      <Input
        type={`text`}
        id={`firstName`}
        name={`firstName`}
        label={`First name`}
        error={error.firstName}
        onChange={onChange}
        className={`w-full mb-5`}
        placeholder={`Enter your first name`}
      />

      <Input
        type={`text`}
        id={`lastName`}
        name={`lastName`}
        label={`Last name`}
        onChange={onChange}
        className={`w-full`}
        placeholder={`Enter your last name (optional)`}
      />
    </div>
  );
};

export default Name;
