import React from "react";

const LeftPart = ({ title, image, imageAltText, description }) => {
  return (
    <div>
      <h3 className="font-inter font-semibold lg:text-[19px] xl:text-[21px] 2xl:text-[26px]">
        {title}
      </h3>

      <img src={image} alt={imageAltText} className={`lg:w-[350px] xl:w-[355px] 2xl:w-[480px] mx-auto`} />

      <h3
        className="font-poppins lg:text-sm 2xl:text-lg text-title_color leading-normal w-[90%] text-justify"
      >
        {description}
      </h3>
    </div>
  );
};

export default LeftPart;
