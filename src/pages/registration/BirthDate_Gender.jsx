import React from "react";
import { dates } from "../../data/dates";
import { months } from "../../data/months";

const BirthDate_Gender = ({ activeItem, info, error, onChange }) => {
  const years = Array.from(
    new Array(105),
    (value, index) => new Date().getFullYear() - index
  );

  return (
    <div
      className={
        activeItem === 2
          ? "absolute top-0 left-0 w-full px-2 translate-x-0 transition-all duration-300 ease-in-out"
          : activeItem === 3 || activeItem === 4 || activeItem === 5
          ? "absolute top-0 left-0 w-full px-2 -translate-x-full transition-all duration-300 ease-in-out"
          : "absolute top-0 left-0 w-full px-2 translate-x-full transition-all duration-300 ease-in-out"
      }
    >
      <div className="relative">
        <p className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1">
          Date of birth
        </p>

        <div className="flex gap-x-4 mb-5">
          <div className="relative w-1/3">
            <div
              className={
                error.birthDate
                  ? "w-full pr-4 bg-white border-2 border-red-400 rounded-[6px] overflow-hidden"
                  : "w-full pr-4 bg-white border-2 border-[#a8c7fa] rounded-[6px] overflow-hidden"
              }
            >
              <select
                name="birthDate"
                id="birthDate"
                onChange={onChange}
                className="w-full py-4 font-poppins text-secondary-text focus:outline-none px-5"
              >
                {info.birthDate === "" && (
                  <option value="birth-day">select day</option>
                )}
                {dates.map((item, index) => (
                  <option key={index} value={item.date}>
                    {item.date}
                  </option>
                ))}
              </select>
            </div>

            {error.birthDate && (
              <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
                {error.birthDate}
              </p>
            )}
          </div>

          <div className="w-1/3 relative">
            <div
              className={
                error.birthMonth
                  ? "w-full pr-4 bg-white border-2 border-red-400 rounded-[6px] overflow-hidden"
                  : "w-full pr-4 bg-white border-2 border-[#a8c7fa] rounded-[6px] overflow-hidden"
              }
            >
              <select
                name="birthMonth"
                id="birthMonth"
                onChange={onChange}
                className="w-full py-4 font-poppins text-secondary-text focus:outline-none px-5"
              >
                {info.birthMonth === "" && (
                  <option value="birth-month">select month</option>
                )}
                {months.map((item, index) => (
                  <option key={index} value={item.number}>
                    {item.month}
                  </option>
                ))}
              </select>
            </div>

            {error.birthMonth && (
              <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
                {error.birthMonth}
              </p>
            )}
          </div>

          <div className="w-1/3 relative">
            <div
              className={
                error.birthYear
                  ? "w-full pr-4 bg-white border-2 border-red-400 rounded-[6px] overflow-hidden"
                  : "w-full pr-4 bg-white border-2 border-[#a8c7fa] rounded-[6px] overflow-hidden"
              }
            >
              <select
                name="birthYear"
                id="birthYear"
                onChange={onChange}
                className="w-full py-4 font-poppins text-secondary-text focus:outline-none px-5"
              >
                {info.birthYear === "" && (
                  <option value="birth-year">select year</option>
                )}
                {years.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {error.birthYear && (
              <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
                {error.birthYear}
              </p>
            )}
          </div>
        </div>

        {error.age && (
          <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
            {error.age}
          </p>
        )}
      </div>

      <div className={`relative`}>
        <p
          className={
            "block text-xl font-segoe-ui font-medium text-secondary-text mb-[6px]"
          }
        >
          Gender
        </p>

        <div className="flex gap-x-4">
          <div
            className={
              info.gender === "male"
                ? `w-2/4 bg-[#e2e3f0] border-2 border-[#a8c7fa] px-5 rounded-[6px] cursor-pointer flex items-center gap-x-3`
                : `w-2/4 bg-white border-2 ${
                    error.gender ? "border-red-400" : "border-[#a8c7fa]"
                  } px-5 rounded-[6px] cursor-pointer flex items-center gap-x-3`
            }
          >
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={onChange}
              className="w-[20px] h-full aspect-square cursor-pointer focus:outline-none"
            />

            <label
              htmlFor="male"
              className={
                error.gender
                  ? "block cursor-pointer py-4 w-full font-inter font-medium text-red-400 text-lg"
                  : "block cursor-pointer py-4 w-full font-inter font-medium text-secondary-text text-lg"
              }
            >
              Male
            </label>
          </div>

          <div
            className={
              info.gender === "female"
                ? "w-2/4 bg-[#e2e3f0] border-2 border-[#a8c7fa] px-5 rounded-[6px] cursor-pointer flex items-center gap-x-3"
                : `w-2/4 bg-white border-2 ${
                    error.gender ? "border-red-400" : "border-[#a8c7fa]"
                  } px-5 rounded-[6px] cursor-pointer flex items-center gap-x-3`
            }
          >
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={onChange}
              className="w-[20px] h-full aspect-square cursor-pointer focus:outline-none"
            />

            <label
              htmlFor="female"
              className={
                error.gender
                  ? "block cursor-pointer py-4 w-full font-inter font-medium text-red-400 text-lg"
                  : "block cursor-pointer py-4 w-full font-inter font-medium text-secondary-text text-lg"
              }
            >
              Female
            </label>
          </div>
        </div>

        {error.gender && (
          <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
            {error.gender}
          </p>
        )}
      </div>
    </div>
  );
};

export default BirthDate_Gender;
