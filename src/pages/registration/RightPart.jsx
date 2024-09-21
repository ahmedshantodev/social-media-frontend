import React, { useState } from "react";
import Typography from "../../components/layout/Typography";
import Input from "../../components/layout/Input";
import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { useFormik } from "formik";
import { registration } from "../../validation";
import { dates, months } from "../../data/index";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthDate: "",
  birthMonth: "",
  birthYear: "",
  gender: "",
};

const RightPart = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: registration,
    onSubmit: () => {
      console.log(
        "Registration successfull, please chack your email for verify your account"
      );
    },
  });

  const { errors } = formik;

  const years = Array.from(
    new Array(105),
    (value, index) => new Date().getFullYear() - index
  );

  return (
    <div className="w-full">
      <Typography
        variant="h3"
        className="font-inter font-semibold text-xl lg:text-[22px] 2xl:text-[25px] text-center md:text-start mb-4 lg:mb-2 xl:mb-4"
      >
        Create Your Free Ripple Account
      </Typography>

      <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder={"First name"}
              error={errors.firstName ? true : false}
              className={`w-full`}
            />

            {errors.firstName && (
              <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
                {errors.firstName}
              </Typography>
            )}
          </div>

          <Input
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            placeholder={"Last name (optional)"}
            error={false}
            className={`w-full sm:w-2/4`}
          />
        </div>

        <div className="mb-4 xl:mb-6">
          <div className="w-full relative">
            <Input
              type={"email"}
              id={"email"}
              name={"email"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={"Enter your email"}
              error={errors.email ? true : false}
              className={`w-full`}
            />

            {errors.email && (
              <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
                {errors.email}
              </Typography>
            )}
          </div>
        </div>

        <div className="mb-3 md:mb-4 xl:mb-6 relative">
          <div className="w-full relative">
            <Input
              type={passwordShow ? "text" : "password"}
              id={"password"}
              name={"password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder={"Enter your password ( 6+ characters )"}
              error={errors.password ? true : false}
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

            {errors.password && (
              <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
                {errors.password}
              </Typography>
            )}
          </div>
        </div>

        <Typography
          variant="p"
          className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
        >
          Date of birth :
        </Typography>

        <div className="mb-3 md:mb-4 xl:mb-6 sm:flex justify-between gap-3 md:gap-4 xl:gap-6">
          <div
            className={
              errors.birthDate
                ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
                : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
            }
          >
            <select
              id="birthDate"
              name="birthDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthDate}
              className={
                errors.birthDate
                  ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                  : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
              }
            >
              <option value="birth-date">Birth date</option>
              {dates.map((item, index) => (
                <option key={index} value={item.date}>
                  {item.date}
                </option>
              ))}
            </select>

            {errors.birthDate && (
              <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
                {errors.birthDate}
              </Typography>
            )}
          </div>

          <div
            className={
              errors.birthDate
                ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
                : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
            }
          >
            <select
              id="birthMonth"
              name="birthMonth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthMonth}
              className={
                errors.birthDate
                  ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                  : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
              }
            >
              <option value="birth-month">Birth month</option>
              {months.map((item, index) => (
                <option key={index} value={item.month}>
                  {item.month}
                </option>
              ))}
            </select>

            {errors.birthMonth && (
              <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
                {errors.birthMonth}
              </Typography>
            )}
          </div>

          <div
            className={
              errors.birthDate
                ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
                : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
            }
          >
            <select
              id="birthYear"
              name="birthYear"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthYear}
              className={
                errors.birthDate
                  ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                  : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
              }
            >
              <option value="birth-year">Birth year</option>
              {years.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {errors.birthYear && (
              <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
                {errors.birthYear}
              </Typography>
            )}
          </div>
        </div>

        <Typography
          variant="p"
          className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
        >
          Gender :
        </Typography>

        <div className="flex gap-3 md:gap-4 lg:gap-6 mb-6 relative">
          <div
            onClick={() => setSelectedGender("male")}
            className={
              selectedGender == "male"
                ? "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-3 md:pl-4 flex gap-3 overflow-hidden cursor-pointer bg-[#e2e3f0] text-black"
                : "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-3 md:pl-4 flex gap-3 overflow-hidden cursor-pointer"
            }
          >
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[15px] md:w-[16px] 2xl:w-[20px] aspect-square cursor-pointer"
            />

            <label
              htmlFor="male"
              className="block cursor-pointer py-2 2xl:py-[17px] w-full xl:text-[15px] 2xl:text-base"
            >
              Male
            </label>
          </div>

          <div
            onClick={() => setSelectedGender("female")}
            className={
              selectedGender == "female"
                ? "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer bg-[#e2e3f0] text-black"
                : "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer"
            }
          >
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[15px] md:w-[16px] 2xl:w-[20px] aspect-square cursor-pointer"
            />

            <label
              htmlFor="female"
              className="block cursor-pointer py-2 2xl:py-[17px] w-full xl:text-[15px] 2xl:text-base"
            >
              Female
            </label>
          </div>

          {errors.gender && (
            <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
              {errors.gender}
            </Typography>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full py-2.5 lg:py-2 2xl:py-[14px] bg-[#4474f4] text-white text-base 2xl:text-lg font-poppins"
        >
          sign up
        </button>
      </form>

      <Link
        to={"/login"}
        className="inline-block group font-poppins text-sm 2xl:text-[16px] text-title_color mb-[2px] ml-[2px] mt-3 text-center md:text-start"
      >
        Already have account?{" "}
        <span className="group-hover:underline group-hover:text-[#4474f4]">
          Login
        </span>
      </Link>
    </div>
  );
};

export default RightPart;
