import React, { useRef } from "react";
import StoryListItem from "../../components/layout/StoryListItem";
import { FiPlus } from "react-icons/fi";
import { story } from "../../data/story";
import { IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useSelector } from "react-redux";

const StoriesPart = () => {
  const user = useSelector((activeUser) => activeUser.user.information);

  let sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToScroll: 5.5,
    slidesToShow: 5.5,
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
            <div className="group relative w-[95%] h-[210px] border border-primary-border rounded-[10px] overflow-hidden cursor-pointer">
              <div className="w-full h-[70%]">
                <img
                  src={user?.profilePicture}
                  alt={user?.fullName}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-150 ease-in-out"
                />
              </div>

              <div className="w-full h-[30%] bg-white text-center pt-7 relative">
                <FiPlus className="absolute top-0 -translate-y-2/4 left-2/4 -translate-x-2/4 box-content bg-[#075ce5] text-white text-[22px] p-[6px] rounded-full border-2 border-white group-hover:scale-[1.04] transition-all duration-150 ease-in-out " />

                <p className="font-segoe-ui font-medium text-[15px]">Create Story</p>
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
        className="absolute left-4 top-2/4 z-10 -translate-y-2/4 box-content bg-white text-black text-2xl p-2 rounded-full "
      >
        <IoIosArrowForward className=" rotate-180" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-2/4 z-10 -translate-y-2/4 box-content bg-white text-black text-2xl p-2 rounded-full "
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default StoriesPart;
