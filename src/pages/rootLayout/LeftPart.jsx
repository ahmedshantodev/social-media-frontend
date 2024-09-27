import React from "react";
import Image from "../../components/layout/Image";
import { data } from "./data";
import MenuListItem from "../../components/layout/MenuListItem";
import { SettingsIcon } from "../../assets/svg/SettingsIcon";

const LeftPart = () => {
  return (
    <div className="bg-[#00b0ff]/40d h-full w-[350px] mt-10 px-5">
      <div>
        <div className="w-24 aspect-square rounded-full overflow-hidden mx-auto">
          <Image
            src={
              "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
            }
            alt={""}
            className={`w-full`}
          />
        </div>

        <div className="text-center mt-2.5">
          <h2 className="font-gilroy-semiBold text-lg text-black">
            Monsur Ahmed Shanto
          </h2>
          <p className="font-inter text-secondary_color text-sm -mt-1">
            ahmedshantodev@gamil.com
          </p>
        </div>
      </div>

      <div className="mt-10 w-3/4 mx-auto">
        {data.map((item, index) => (
          <MenuListItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
          />
        ))}

        <div className="group flex items-center gap-4 mb-7 px-6 py-3 rounded-full cursor-pointer hover:bg-black transition-all ease-linear duration-100">
          <div className="group-hover:text-white transition-all ease-linear duration-100">
            <SettingsIcon className="text-red" />
          </div>

          <div className="font-gilroy-medium text-[19px] text-black group-hover:text-white transition-all ease-linear duration-100">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
