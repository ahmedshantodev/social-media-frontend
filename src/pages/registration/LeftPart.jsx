import React from "react";
import Typography from "../../components/layout/Typography";
import Image from "../../components/layout/Image";

const LeftPart = ({ title, image, imageAltText, description }) => {
  return (
    <div>
      <Typography variant="h3" className="font-inter font-semibold lg:text-[19px] xl:text-[21px] 2xl:text-[26px]">
        {title}
      </Typography>

      <Image src={image} alt={imageAltText} className={`lg:w-[350px] xl:w-[395px] 2xl:w-[480px] mx-auto`} />

      <Typography
        variant="h3"
        className="font-poppins lg:text-sm 2xl:text-lg text-title_color leading-normal w-[90%] text-justify"
      >
        {description}
      </Typography>
    </div>
  );
};

export default LeftPart;
