import React from "react";
import Typography from "../../components/layout/Typography";
import { dates, months } from "../../data/index";

const DateOfBirth = ({ onBlur, onChange, value, error }) => {
  const years = Array.from(
    new Array(105),
    (value, index) => new Date().getFullYear() - index
  );

  return (
    <div>
      <Typography
        variant="p"
        className="font-poppins text-[15px] lg:text-sm xl:text-[15] 2xl:text-[17px] text-title_color mb-[2px] ml-[2px]"
      >
        Date of birth :
      </Typography>

      <div className="mb-3 md:mb-4 2xl:mb-6 sm:flex justify-between gap-3 md:gap-4 xl:gap-6">
        <div
          className={
            error.birthDate
              ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
              : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
          }
        >
          <select
            id="birthDate"
            name="birthDate"
            onBlur={onBlur}
            onChange={onChange}
            value={value.birthDate}
            className={
              error.birthDate
                ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
            }
          >
            <option value="birth-date" className="!text-[#29313d]">
              Birth date
            </option>
            {dates.map((item, index) => (
              <option key={index} value={item.date} className="!text-[#29313d]">
                {item.date}
              </option>
            ))}
          </select>

          {error.birthDate && (
            <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
              {error.birthDate}
            </Typography>
          )}
        </div>

        <div
          className={
            error.birthMonth
              ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
              : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
          }
        >
          <select
            id="birthMonth"
            name="birthMonth"
            onBlur={onBlur}
            onChange={onChange}
            value={value.birthMonth}
            className={
              error.birthMonth
                ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
            }
          >
            <option value="birth-month" className="!text-[#29313d]">
              Birth month
            </option>
            {months.map((item, index) => (
              <option
                key={index}
                value={item.number}
                className="!text-[#29313d]"
              >
                {item.month}
              </option>
            ))}
          </select>

          {error.birthMonth && (
            <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
              {error.birthMonth}
            </Typography>
          )}
        </div>

        <div
          className={
            error.birthYear
              ? `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#e32626] rounded-[8px] relative mb-[13px] md:mb-0`
              : `w-full sm:w-1/3 px-4 2xl:px-7 border border-[#cacad8] rounded-[8px] relative mb-[13px] md:mb-0`
          }
        >
          <select
            id="birthYear"
            name="birthYear"
            onBlur={onBlur}
            onChange={onChange}
            value={value.birthYear}
            className={
              error.birthYear
                ? "w-full font-poppins text-[#e32626] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
                : "w-full font-poppins text-[#29313d] py-2.5 2xl:py-[17px] focus:outline-none cursor-pointer text-[13px] md:text-sm lg:text-[13px] 2xl:text-base"
            }
          >
            <option value="birth-year" className="!text-[#29313d]">
              Birth year
            </option>
            {years.map((item, index) => (
              <option key={index} value={item} className="!text-[#29313d]">
                {item}
              </option>
            ))}
          </select>

          {error.birthYear && (
            <Typography className="font-inter text-[11px] 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 2xl:-bottom-[22px] left-1">
              {error.birthYear}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateOfBirth;
