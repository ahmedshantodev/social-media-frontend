import React, { useState } from "react";
import userOne from "/public/remove/userOne.png";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";

const ProfileHeaderPart = () => {
  const navMenu = [
    "post",
    "about",
    "friends",
    "groups",
    "photos",
    "pinned posts",
  ];
  const [menuActiveItem, setMenuActiveItem] = useState(navMenu[0]);

  return (
    <div className="relative w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <img
          src={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/410566861_1046073563381297_1306627701025954984_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=O-1VF3TARFgQ7kNvgGdldTE&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AzzSjVep_LPt-zVK0vr9Y5_&oh=00_AYDB7gv0FoIlOjoDZIM7MjwnOzcrb74SZTGn51QWu16vcQ&oe=6730FDCE"
          }
          alt="cover photo"
          className="w-full h-full object-cover"
        />

        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-white to-white backdrop-blur-3xl" />
      </div>

      <div className="w-[1300px] mx-auto relative">
        <div className="relative w-full h-[500px]">
          <button className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg flex items-center gap-x-2 text-lg font-semibold">
            <MdPhotoCamera className="text-[22px]" /> Edit Cover Photo
          </button>

          <img
            src={
              "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/410566861_1046073563381297_1306627701025954984_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=O-1VF3TARFgQ7kNvgGdldTE&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AzzSjVep_LPt-zVK0vr9Y5_&oh=00_AYDB7gv0FoIlOjoDZIM7MjwnOzcrb74SZTGn51QWu16vcQ&oe=6730FDCE"
            }
            alt="cover photo"
            className="w-full h-full object-cover rounded-b-[12px]"
          />

          <div className="absolute top-full left-12 z-20 -translate-y-[40%] border-4 border-white rounded-full">
            <img
              src={userOne}
              alt=""
              className="w-[190px] aspect-square object-cover rounded-full border-[1px] border-primary-border"
            />

            <button className="absolute bottom-0 right-0 -translate-x-[18%] -translate-y-[18%] text-2xl bg-[#d6d9dd] rounded-full p-2 border-2 border-white box-border">
              <MdPhotoCamera />
            </button>
          </div>
        </div>

        <div className="w-full h-[135px] pl-[260px] pt-[25px] border-b-2 border-primary-border/50">
          <div className="flex items-end">
            <div className="w-[65%]">
              <h3 className="text-4xl font-semibold">Rayhand Ahmed Siam</h3>

              <div className="space-x-[6px] mt-[5px]">
                <Link
                  to={""}
                  className="font-poppinss font-semibold text-[16px] text-secondary-text hover:underline"
                >
                  290 friends
                </Link>
                <span className="text-secondary-text">-</span>
                <Link
                  to={""}
                  className="font-poppinss font-semibold text-[16px] text-secondary-text hover:underline"
                >
                  192 mutual
                </Link>
              </div>
            </div>

            <div className="w-[35%] flex items-center justify-end gap-x-2.5">
              <button className=" bg-primary-button text-white font-poppins text-lg flex items-center gap-x-1 py-2.5 px-4 rounded-md">
                <FiPlus className="text-2xl" /> Add story
              </button>

              <button className=" bg-secondary-button text-primary-text font-poppins text-lg flex items-center gap-x-1 py-2.5 px-4 rounded-md">
                <MdModeEdit className="text-2xl" /> Edit profile
              </button>
            </div>
          </div>
        </div>

        <div className="mt-1">
          {navMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => setMenuActiveItem(item)}
              className={
                menuActiveItem === item
                  ? "py-4 px-7 rounded-lg capitalize font-poppins text-[17px] font-medium text-secondary-text relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[4px] after:rounded-t-lg"
                  : "py-4 px-7 rounded-t-lg capitalize font-poppins text-[17px] font-medium text-secondary-text hover:bg-secondary-bg"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderPart;