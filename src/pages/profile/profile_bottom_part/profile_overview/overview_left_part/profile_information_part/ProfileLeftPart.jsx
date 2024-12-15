import React from "react";
import AllPhotos from "./AllPhotos";
import AllFriends from "./AllFriends";
import AllInformationPart from ".";

const ProfileInformationPart = ({ data, visitor, isLoading, setMenuActiveItem }) => {
  return (
    <div>
      <AllInformationPart visitor={visitor} />

      <AllPhotos
        data={data}
        isLoading={isLoading}
        setMenuActiveItem={setMenuActiveItem}
      />

      <AllFriends
        data={data}
        setMenuActiveItem={setMenuActiveItem} 
      />

      <p className="py-2 font-segoe-ui font-semibold text-[13px] text-secondary-text px-2.5 text-center">
        Monsur Ahmed Shanto © 2024
      </p>
    </div>
  );
};

export default ProfileInformationPart;
