import React, { useState } from "react";
import Typography from "../../components/layout/Typography";
import Input from "../../components/layout/Input";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const NameEmailPassowrd = ({
  existUserError,
  onBlur,
  onChange,
  value,
  error,
}) => {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div>
      <div className="mb-4 2xl:mb-6">
        <label
          htmlFor="email"
          className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
        >
          Email :
        </label>

        <div className="w-full relative">
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            onBlur={onBlur}
            onChange={onChange}
            value={value.email}
            placeholder={"Enter your email"}
            error={error.email || existUserError ? true : false}
            className={`w-full`}
          />

          {error.email && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {error.email}
            </Typography>
          )}
          {existUserError && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {existUserError}
            </Typography>
          )}
        </div>
      </div>

      <div className="mb-3 md:mb-4 2xl:mb-6 relative">
        <label
          htmlFor="password"
          className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
        >
          Password :
        </label>

        <div className="w-full relative">
          <Input
            type={passwordShow ? "text" : "password"}
            id={"password"}
            name={"password"}
            onBlur={onBlur}
            onChange={onChange}
            value={value.password}
            error={error.password ? true : false}
            placeholder={"Enter your password ( 6+ characters )"}
            className={`w-full`}
          />

          {passwordShow ? (
            <BsEyeFill
              onClick={() => setPasswordShow(!passwordShow)}
              className="absolute top-2/4 -translate-y-2/4 right-2 sm:right-3 xl:right-5 box-content text-sm xl:text-lg cursor-pointer p-1"
            />
          ) : (
            <BsEyeSlash
              onClick={() => setPasswordShow(!passwordShow)}
              className="absolute top-2/4 -translate-y-2/4 right-2 sm:right-3 xl:right-5 box-content text-sm xl:text-lg cursor-pointer p-1"
            />
          )}

          {error.password && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {error.password}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameEmailPassowrd;
