import React, { useRef, useState } from "react";
import StoryListItem from "../../components/listItem/StoryListItem";
import { FiPlus } from "react-icons/fi";
import { story } from "../rootLayout/data";

import { IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoriesPart = () => {
  let sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full mt-4 relative">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          <div>
            <div className="group relative w-[95%] h-[225px] rounded-[10px] overflow-hidden cursor-pointer">
              <div className="w-full h-[70%]">
                <img
                  src={
                    "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
                  }
                  alt={""}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-150 ease-in-out"
                />
              </div>

              <div className="w-full h-[30%] bg-white text-center pt-7 relative">
                <FiPlus className="absolute top-0 -translate-y-2/4 left-2/4 -translate-x-2/4 box-content bg-[#075ce5] text-white text-2xl p-2 rounded-full border-2 border-white group-hover:scale-[1.04] transition-all duration-150 ease-in-out " />

                <p className="font-poppins font-medium">Create Story</p>
              </div>
            </div>
          </div>

          {story.map((item, index) => (
            <div key={index}>
              <StoryListItem
                index={index}
                name={item.name}
                image={item.image}
                story={item.story}
              />
            </div>
          ))}
        </Slider>
      </div>

      <button
        onClick={previous}
        className="absolute left-4 top-2/4 z-10 -translate-y-2/4 box-content bg-white text-black text-2xl p-2.5 rounded-full "
      >
        <IoIosArrowForward className=" rotate-180" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-2/4 z-10 -translate-y-2/4 box-content bg-white text-black text-2xl p-2.5 rounded-full "
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default StoriesPart;
