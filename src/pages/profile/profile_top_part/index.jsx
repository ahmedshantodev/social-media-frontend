import React, { useRef, useState } from "react";
// react icons
import { FiPlus } from "react-icons/fi";
import {
  FaUserPlus,
  FaFacebookMessenger,
  FaUserXmark,
  FaUserMinus,
} from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { MdModeEdit, MdPhotoCamera } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
// api call
import {
  useAcceptFriendRequstMutation,
  useDeleteSentRequstMutation,
  useRejectFriendRequstMutation,
  useSendFriendRequstMutation,
  useUnfriendMutation,
} from "../../../redux/api/friendsApi";
// components
import PrimaryButton from "../../../components/layout/PrimaryButton";
import SecondaryButton from "../../../components/layout/SecondaryButton";
import ProfileUploadModal from "./ProfileUploadModal";
import CoverPhotoPart from "./CoverPhotoPart";
import OutSideClick from "../../../functions/click";

const ProfileTopPart = ({
  user,
  menu,
  profileInfo,
  menuActiveItem,
  profileVisitor,
  profileTopPartRef,
  setMenuActiveItem,
}) => {
  const isFriendRef = useRef();
  const isFriend = profileInfo?.friends.includes(user?.id);
  const [isFriendDropdownShow, setIsFriendDropdownShow] = useState(false);
  OutSideClick(isFriendRef, () => {
    setIsFriendDropdownShow(false);
  });

  const isSentRequst = profileInfo?.recivedRequst.includes(user.id);
  const isRecivedRequst = profileInfo?.sentRequst.includes(user.id);

  // api call
  const [sendFriendRequst, { isLoading: sendFriendRequstLoading }] = useSendFriendRequstMutation();
  const [deleteSentRequst, { isLoading: deleteSentRequstLoading }] = useDeleteSentRequstMutation();
  const [acceptFriendRequst, { isLoading: acceptFriendRequstLoading }] = useAcceptFriendRequstMutation();
  const [rejectFriendRequst, { isLoading: rejectFriendRequstLoading }] = useRejectFriendRequstMutation();
  const [unfriend, { isLoading: unfriendLoading }] = useUnfriendMutation();

  const [coverPhoto, setCoverPhoto] = useState("");
  const [isProfileUploadModalShow, setIsProfileUploadModalShow] = useState(false);

  const handleSendFriendRequst = async () => {
    const reciverId = profileInfo._id;
    const senderId = user.id;

    await sendFriendRequst({
      senderId: senderId,
      reciverId: reciverId,
    });
  };

  const handleDeleteSentRequst = async () => {
    const senderId = user.id;
    const reciverId = profileInfo._id;

    await deleteSentRequst({
      senderId: senderId,
      reciverId: reciverId,
    });
  };

  const handleAcceptFriendRequst = async () => {
    const senderId = profileInfo._id;
    const reciverId = user.id;

    await acceptFriendRequst({
      senderId: senderId,
      reciverId: reciverId,
    });
  };

  const handleRejectFriendRequst = async () => {
    const senderId = profileInfo._id;
    const reciverId = user.id;

    await rejectFriendRequst({
      senderId: senderId,
      reciverId: reciverId,
    });
  };

  const hanldeUnfriend = async () => {
    const senderId = user.id;
    const reciverId = profileInfo._id;

    await unfriend({
      senderId: senderId,
      reciverId: reciverId,
    });
  };

  return (
    <div
      ref={profileTopPartRef}
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
            profileInfo={profileInfo}
            coverPhoto={coverPhoto}
            setCoverPhoto={setCoverPhoto}
            profileVisitor={profileVisitor}
          />

          <div className="absolute top-full left-12 z-20 -translate-y-[40%] border-4 border-white rounded-full">
            <img
              src={profileInfo?.profilePicture}
              alt=""
              className="w-[190px] aspect-square object-cover rounded-full border-[1px] border-primary-border"
            />

            {!profileVisitor && (
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
            profileInfo={profileInfo}
            show={isProfileUploadModalShow}
            setShow={setIsProfileUploadModalShow}
          />
        </div>

        <div className="w-full h-[135px] pl-[260px] pt-[25px]">
          <div className="flex items-end">
            <div className="w-[50%]">
              <h3 className="text-4xl font-semibold">
                {profileInfo?.firstName + " " + profileInfo?.lastName}
              </h3>

              <p className="inline-block font-inter font-medium text-xl text-secondary-text mt-1">
                @{profileInfo?.username}
              </p>
            </div>

            <div className="w-[50%]">
              {!profileVisitor ? (
                <div className="w-full flex items-center justify-end gap-x-2.5">
                  <PrimaryButton>
                    <FiPlus className="text-xl" /> Add story
                  </PrimaryButton>

                  <SecondaryButton>
                    <MdModeEdit className="text-xl" /> Edit profile
                  </SecondaryButton>

                  <SecondaryButton>
                    <BsThreeDots className="text-xl" />
                  </SecondaryButton>
                </div>
              ) : isFriend ? (
                <div className="w-full flex items-center justify-end gap-x-2.5">
                  <div className="relative">
                    <SecondaryButton
                      onClick={() =>
                        setIsFriendDropdownShow(!isFriendDropdownShow)
                      }
                    >
                      <FaUserCheck className="text-xl" /> Friends
                    </SecondaryButton>

                    <div
                      ref={isFriendRef}
                      className={
                        isFriendDropdownShow
                          ? "block w-[250px] absolute top-full translate-y-4 left-0 p-3 bg-white rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                          : "hidden w-[250px] absolute top-full translate-y-4 left-0 p-3 bg-white rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                      }
                    >
                      <div className="absolute top-0 -translate-y-2/4 left-2 bg-white w-[15px] aspect-square rotate-45" />

                      {unfriendLoading ? (
                        <button
                          className="w-full flex items-center gap-x-2 font-medium text-lg py-2 px-2 rounded-md hover:bg-[#e2e5e9]"
                        >
                          saving...
                        </button>
                      ) : (
                        <button
                          onClick={hanldeUnfriend}
                          className="w-full flex items-center gap-x-2 font-medium text-lg py-2 px-2 rounded-md hover:bg-[#e2e5e9]"
                        >
                          <FaUserMinus className="text-2xl" /> Unfriend
                        </button>
                      )}

                      <button className="w-full flex items-center gap-x-2 font-medium text-lg py-2 px-2 rounded-md hover:bg-[#e2e5e9]">
                        <IoNotifications className="text-xl" /> Unfollow
                      </button>

                      <button className="w-full flex items-center gap-x-2 font-medium text-lg py-2 px-2 rounded-md hover:bg-[#e2e5e9]">
                        <MdBlock className="text-xl" /> Block
                      </button>
                    </div>
                  </div>

                  <PrimaryButton>
                    <FaFacebookMessenger className="text-xl" /> Message
                  </PrimaryButton>

                  <SecondaryButton>
                    <BsThreeDots className="text-xl" />
                  </SecondaryButton>
                </div>
              ) : isSentRequst ? (
                <div className="w-full flex items-center justify-end gap-x-2.5">
                  <SecondaryButton
                    isLoading={deleteSentRequstLoading}
                    onClick={handleDeleteSentRequst}
                  >
                    <FaUserXmark className="text-xl" /> Cancel Requst
                  </SecondaryButton>

                  <PrimaryButton>
                    <FaFacebookMessenger className="text-xl" />
                    Message
                  </PrimaryButton>

                  <SecondaryButton>
                    <BsThreeDots className="text-xl" />
                  </SecondaryButton>
                </div>
              ) : isRecivedRequst ? (
                <div className="w-full flex items-center justify-end gap-x-2.5">
                  <SecondaryButton>
                    <FaFacebookMessenger className="text-xl" /> Message
                  </SecondaryButton>

                  <PrimaryButton>
                    <MdBlock className="text-xl" /> Block
                  </PrimaryButton>

                  <SecondaryButton>
                    <BsThreeDots className="text-xl" />
                  </SecondaryButton>
                </div>
              ) : (
                <div className="w-full flex items-center justify-end gap-x-2.5">
                  <PrimaryButton
                    isLoading={sendFriendRequstLoading}
                    onClick={handleSendFriendRequst}
                  >
                    <FaUserPlus className="text-xl" /> Add friend
                  </PrimaryButton>

                  <SecondaryButton>
                    <IoNotifications className="text-xl" /> Follow
                  </SecondaryButton>

                  <PrimaryButton>
                    <FaFacebookMessenger className="text-xl" /> message
                  </PrimaryButton>

                  <SecondaryButton>
                    <BsThreeDots className="text-xl" />
                  </SecondaryButton>
                </div>
              )}
            </div>
          </div>
        </div>

        {isRecivedRequst && (
          <div className="bg-secondary-bg py-4 px-5 my-2.5 rounded-[8px] flex items-center justify-between">
            <p className="font-inter text-xl">
              {profileInfo?.firstName} sent you friend requst
            </p>

            <div className="flex items-center gap-x-2.5">
              <PrimaryButton
                isLoading={acceptFriendRequstLoading}
                onClick={handleAcceptFriendRequst}
              >
                Confirm Requst
              </PrimaryButton>

              <SecondaryButton
                isLoading={rejectFriendRequstLoading}
                onClick={handleRejectFriendRequst}
              >
                Delete Requst
              </SecondaryButton>
            </div>
          </div>
        )}

        <div className="mt-1 border-t-2 border-primary-border/50">
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

export default ProfileTopPart;
