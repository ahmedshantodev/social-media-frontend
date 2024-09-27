import React from "react";
import FriendRequstListItem from "../../components/layout/FriendRequstListItem";
import { NavLink } from "react-router-dom";

const FriendRequestsPart = () => {
  return (
    <div className="ml-5 bg-[#f0f2f5] px-5 py-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-inter font-semibold text-lg">Friend requsts</p>
        </div>

        <div>
          <NavLink
            to={"/friends"}
            className="bg-black text-white rounded-full px-5 py-2 font-gilroy-medium border border-black hover:bg-white hover:text-black transition-all ease-in-out duration-150"
          >
            See all
          </NavLink>
        </div>
      </div>

      <div className="mt-4">
        <FriendRequstListItem
          image={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/358108065_1969389896727734_3528442733514744615_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vVE-SnYB3jsQ7kNvgFMDyIh&_nc_ht=scontent.fdac41-1.fna&oh=00_AYARh4NVUrn8nfUQft4YmVv-2lR2guW2ty8vUGVZYwuGEA&oe=66FC9499"
          }
          name={"Azmir Uddin Alif"}
          time={"2 hours ago"}
        />
        <FriendRequstListItem
          image={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/358108065_1969389896727734_3528442733514744615_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vVE-SnYB3jsQ7kNvgFMDyIh&_nc_ht=scontent.fdac41-1.fna&oh=00_AYARh4NVUrn8nfUQft4YmVv-2lR2guW2ty8vUGVZYwuGEA&oe=66FC9499"
          }
          name={"Azmir Uddin Alif"}
          time={"2 hours ago"}
        />
        <FriendRequstListItem
          image={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/358108065_1969389896727734_3528442733514744615_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vVE-SnYB3jsQ7kNvgFMDyIh&_nc_ht=scontent.fdac41-1.fna&oh=00_AYARh4NVUrn8nfUQft4YmVv-2lR2guW2ty8vUGVZYwuGEA&oe=66FC9499"
          }
          name={"Azmir Uddin Alif"}
          time={"2 hours ago"}
        />
      </div>
    </div>
  );
};

export default FriendRequestsPart;
