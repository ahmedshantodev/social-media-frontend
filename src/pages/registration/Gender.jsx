import React, { useState } from "react";
import Typography from "../../components/layout/Typography";

const Gender = ({ onBlur, onChange, error }) => {
  const [selectedGender, setSelectedGender] = useState("");
  return (
    <div>
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
            onBlur={onBlur}
            onChange={onChange}
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
            onBlur={onBlur}
            onChange={onChange}
            className="w-[15px] md:w-[16px] 2xl:w-[20px] aspect-square cursor-pointer"
          />

          <label
            htmlFor="female"
            className="block cursor-pointer py-2 2xl:py-[17px] w-full xl:text-[15px] 2xl:text-base"
          >
            Female
          </label>
        </div>

        {error.gender && (
          <Typography className="font-inter text-[11px] lg:text-xs 2xl:text-[15px] text-[#e32626] absolute -bottom-[14px] md:-bottom-4 lg:-bottom-[15px] 2xl:-bottom-[18px] left-1">
            {error.gender}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Gender;
