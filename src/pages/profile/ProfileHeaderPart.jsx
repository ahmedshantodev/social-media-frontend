import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import SecondaryButton from "../../components/layout/SecondaryButton";
import PrimaryButton from "../../components/layout/PrimaryButton";
import ProfileUploadModal from "./ProfileUploadModal";
import CoverPhotoPart from "./CoverPhotoPart";

const ProfileHeaderPart = ({
  data,
  visitor,
  user,
  menu,
  menuActiveItem,
  profileHeaderRef,
  setMenuActiveItem,
}) => {
  const [coverPhoto, setCoverPhoto] = useState("");
  const [isProfileUploadModalShow, setIsProfileUploadModalShow] =
    useState(false);

  return (
    <div
      ref={profileHeaderRef}
      className="relative w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <img
          src={coverPhoto || user?.coverPhoto}
          alt="cover photo background"
          className="w-full h-full object-cover"
        />

        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-white to-white backdrop-blur-3xl" />
      </div>

      <div className="w-[1300px] mx-auto relative">
        <div className="relative w-full h-[500px]">
          <CoverPhotoPart
            user={user}
            data={data}
            visitor={visitor}
            coverPhoto={coverPhoto}
            setCoverPhoto={setCoverPhoto}
          />

          <div className="absolute top-full left-12 z-20 -translate-y-[40%] border-4 border-white rounded-full">
            <img
              src={user?.profilePicture}
              alt=""
              className="w-[190px] aspect-square object-cover rounded-full border-[1px] border-primary-border"
            />

            {visitor && (
              <button
                onClick={() => setIsProfileUploadModalShow(true)}
                className="absolute bottom-0 right-0 -translate-x-[18%] -translate-y-[18%] text-2xl bg-[#d6d9dd] rounded-full p-2 border-2 border-white box-border"
              >
                <MdPhotoCamera />
              </button>
            )}
          </div>

          <ProfileUploadModal
            user={user}
            data={data}
            show={isProfileUploadModalShow}
            setShow={setIsProfileUploadModalShow}
          />
        </div>

        <div className="w-full h-[135px] pl-[260px] pt-[25px] border-b-2 border-primary-border/50">
          <div className="flex items-end">
            <div className="w-[65%]">
              <h3 className="text-4xl font-semibold">Rayhand Ahmed Siam</h3>

              <p className="inline-block font-inter font-medium text-xl text-secondary-text mt-1">
                @rayhanahmedsiam
              </p>
            </div>

            {visitor ? (
              <div className="w-[35%] flex items-center justify-end gap-x-2.5">
                <PrimaryButton className={`flex items-center gap-x-1`}>
                  <FiPlus className="text-xl" /> Add story
                </PrimaryButton>

                <SecondaryButton className={`flex items-center gap-x-1`}>
                  <MdModeEdit className="text-xl" /> Edit profile
                </SecondaryButton>
              </div>
            ) : (
              <div className="w-[35%] flex items-center justify-end gap-x-2.5">
                <PrimaryButton className={`flex items-center gap-x-1`}>
                  <IoPersonAdd className="text-xl" /> Add friend
                </PrimaryButton>

                <SecondaryButton className={`flex items-center gap-x-1`}>
                  <FaFacebookMessenger className="text-xl" /> Send message
                </SecondaryButton>
              </div>
            )}
          </div>
        </div>

        <div className="mt-1">
          {menu.map((item, index) => (
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
