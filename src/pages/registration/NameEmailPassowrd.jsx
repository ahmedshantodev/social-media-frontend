import React, { useState } from "react";
import Typography from "../../components/layout/Typography";
import Input from "../../components/layout/Input";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const NameEmailPassowrd = ({ onBlur, onChange, value, error , touched }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  
  return (
    <div>
      <Typography
        variant="p"
        className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
      >
        Name, Email and Password :
      </Typography>

      <div className="sm:flex sm:gap-3 md:gap-4 2xl:gap-7 mb-4 2xl:mb-6">
        <div className="w-full sm:w-2/4 relative mb-4 sm:mb-0">
          <Input
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            placeholder={"First name"}
            autoComplate="off"
            onBlur={onBlur}
            onChange={onChange}
            value={value.firstName}
            error={touched.firstName ? true : false}
            className={`w-full`}
          />

          {error.firstName && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {error.firstName}
            </Typography>
          )}
        </div>

        <Input
          type={"text"}
          id={"lastName"}
          name={"lastName"}
          onBlur={onBlur}
          onChange={onChange}
          value={value.lastName}
          placeholder={"Last name (optional)"}
          error={false}
          className={`w-full sm:w-2/4`}
        />
      </div>

      <div className="mb-4 2xl:mb-6">
        <div className="w-full relative">
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            onBlur={onBlur}
            onChange={onChange}
            value={value.email}
            placeholder={"Enter your email"}
            error={error.email ? true : false}
            className={`w-full`}
          />

          {error.email && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {error.email}
            </Typography>
          )}
        </div>
      </div>

      <div className="mb-3 md:mb-4 2xl:mb-6 relative">
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
