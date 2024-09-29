import React from "react";
import FriendRequstListItem from "../listItem/FriendRequstListItem";
import { NavLink } from "react-router-dom";

const FriendRequestsPart = () => {
  return (
    <div className="border-b border-[#ced0d4] pb-3 mb-3">
      <div className="flex items-center justify-between">
        <p className="font-inter font-semibold text-lg text-secondary-text">
          Friend requsts
        </p>

        <div>
          <NavLink
            to={"/friends"}
            className="text-tertiary-text font-poppins hover:underline transition-all ease-in-out duration-150"
          >
            See all
          </NavLink>
        </div>
      </div>

      <div className="mt-3">
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
