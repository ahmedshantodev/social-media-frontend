import React from "react";

const StoryListItem = ({ index, name, image, story }) => {
  return (
    <div
      key={index}
      className=" relative w-[95%] h-[225px] rounded-[10px] overflow-hidden cursor-pointer group"
    >
      <div className="w-[40px] aspect-square absolute top-3 left-3 z-10 rounded-full overflow-hidden border-2 border-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-full absolute top-2/4 -translate-y-2/4">
        <img
          src={story}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-100 ease-linear"
        />
      </div>

      <div className="absolute bottom-2 left-1 line-clamp-2">
        <p className="text-white font-medium w-full text-lg leading-5">{name}</p>
      </div>
    </div>
  );
};

export default StoryListItem;
