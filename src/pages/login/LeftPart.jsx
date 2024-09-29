import React from "react";

const LeftPart = ({ title, image, imageAltText, description }) => {
  return (
    <div>
      <h3
        className="font-inter font-semibold lg:text-[19px] xl:text-[20px] 2xl:text-[26px]"
      >
        {title}
      </h3>

      <img
        src={image}
        alt={imageAltText}
        className={`lg:w-[200px] xl:w-[245px] 2xl:w-[300px] mx-auto`}
      />

      <h3
        className="font-poppins lg:text-[12px] 2xl:text-lg text-title_color leading-normal w-[90%] text-justify"
      >
        {description}
      </h3>
    </div>
  );
};

export default LeftPart;
