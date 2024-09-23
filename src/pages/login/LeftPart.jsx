import React from "react";
import Typography from "../../components/layout/Typography";
import Image from "../../components/layout/Image";

const LeftPart = ({ title, image, imageAltText, description }) => {
  return (
    <div>
      <Typography
        variant="h3"
        className="font-inter font-semibold lg:text-[19px] xl:text-[20px] 2xl:text-[26px]"
      >
        {title}
      </Typography>

      <Image
        src={image}
        alt={imageAltText}
        className={`lg:w-[200px] xl:w-[245px] 2xl:w-[300px] mx-auto`}
      />

      <Typography
        variant="h3"
        className="font-poppins lg:text-[12px] 2xl:text-lg text-title_color leading-normal w-[90%] text-justify"
      >
        {description}
      </Typography>
    </div>
  );
};

export default LeftPart;
