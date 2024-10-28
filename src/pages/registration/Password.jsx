import React, { useState } from "react";
import Input from "../../components/layout/Input";

const Password = ({ activeItem, error, onChange }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div
      className={
        activeItem === 4
          ? "absolute top-0 left-0 w-full px-2 translate-x-0 transition-all duration-300 ease-in-out"
          : "absolute top-0 left-0 w-full px-2 translate-x-full transition-all duration-300 ease-in-out"
      }
    >
      <Input
        id={`password`}
        name={`password`}
        label={`Password`}
        onChange={onChange}
        error={error.password}
        className={`w-full mb-5`}
        placeholder={`Enter your password`}
        type={isPasswordShow ? "text" : "password"}
      />

      <Input
        label={`Confirm`}
        onChange={onChange}
        id={`confirmPassword`}
        name={`confirmPassword`}
        className={`w-full mb-[18px]`}
        error={error.confirmPassword}
        placeholder={`re-enter your password`}
        type={isPasswordShow ? "text" : "password"}
      />

      <div className="flex items-center gap-x-2.5">
        <input
          type="checkbox"
          id="show-password"
          name="show-password"
          className="cursor-pointer scale-[1.1]"
          onChange={() => setIsPasswordShow(!isPasswordShow)}
        />
        <label
          htmlFor="show-password"
          className="font-inter text-secondary-text font-medium cursor-pointer"
        >
          Show password
        </label>
      </div>
    </div>
  );
};

export default Password;
