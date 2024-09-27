import React from "react";

const StoryListItem = ({ index, name, image, story }) => {
  return (
    <div key={index} className=" relative w-full h-[250px] rounded-[10px] overflow-hidden cursor-pointer group">
      <div className="w-[50px] aspect-square absolute top-3 left-3 z-10 rounded-full overflow-hidden border-2 border-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div>
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={story} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full absolute top-0 left-0 backdrop-blur-[12px]"></div>
      </div>

      <div className="w-full h-full absolute top-2/4 -translate-y-2/4">
        <img src={story} alt={name} className="w-full h-full object-contain group-hover:scale-[1.03] transition-all duration-150 ease-in-out" />
      </div>
      <div className="absolute bottom-1 left-1">
        <p className="text-white font-medium text-lg">{name}</p>
      </div>
    </div>
  );
};

export default StoryListItem;
