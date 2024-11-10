import React from "react";

const ProfileAllPhotos = ({ data }) => {
  
  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 mt-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="flex items-center justify-between">
        <p className="font-poppins text-xl font-medium">Photos</p>

        <p className="text-lg text-primary-button font-normal hover:underline cursor-pointer">
          See all photos
        </p>
      </div>

      <div className="flex flex-wrap mt-4 rounded-lg overflow-hidden gap-[6px]">
        {data?.images?.resources.length >= 1 &&
          data?.images?.resources.map((item) => (
            <div key={item.asset_id} className="w-[32.5%] aspect-square">
              <img
                src={item.secure_url}
                alt={item.filename}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileAllPhotos;
