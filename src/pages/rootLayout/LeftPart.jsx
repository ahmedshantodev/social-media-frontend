import React from "react";
import Image from "../../components/layout/Image";
import { menu } from "./data";
import MenuListItem from "../../components/layout/MenuListItem";

const LeftPart = () => {
  return (
    <div className="w-[450px] cursor-pointer">
      <div className="py-2 px-2.5 rounded-[10px] flex items-center gap-x-2.5 hover: bg-[#e4e6e9] transition-all duration-150 ease-linear mb-2">
        <div className="w-[45px] aspect-square rounded-full overflow-hidden border border-border_color">
          <Image
            src={
              "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=Aqp7xU3qQTquu4QdVw-KsOo&oh=00_AYDA_F02BMq9BrxcjEMoMFA1-j_W3OWbRQ5mP4eivU2KoA&oe=66FC2464"
            }
            alt={""}
            className={`w-full`}
          />
        </div>

        <h3 className="text-base font-medium font-poppins">
          Monsur Ahmed Shanto
        </h3>
      </div>

      {menu.map((item, index) => (
        <MenuListItem
          index={index}
          icon={item.icon}
          text={item.text}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default LeftPart;
