import React, { useRef, useState } from "react";
// functions
import OutSideClick from "../../functions/click";
// lists
import RecentSearchListItem from "../layout/RecentSearchListItem";
import recentSearchList from "../../data/recentSearchList";
// componnets
import Modal from "../layout/Modal";
// images
import rippleLogo from "/public/images/ripple-logo.png";
// react icons
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { MdNightsStay } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
// react redux
import { useDispatch, useSelector } from "react-redux";
// react router dom
import { Link, useNavigate } from "react-router-dom";
import { activeUser } from "../../redux/slices/activeUserSlice";
import SearchBox from "../layout/SearchBox";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchBoxRef = useRef();
  const settingMenuBoxRef = useRef();
  const user = useSelector((activeUser) => activeUser.user.information);
  const [isSearchBarshow, setIsSearchBarShow] = useState(false);
  const [isSettingMenuShow, setIsSettingMenuShow] = useState(false);
  const [isLogoutModalShow, setIsLogoutModalShow] = useState(false);

  OutSideClick(searchBoxRef, () => {
    setIsSearchBarShow(false);
  });

  OutSideClick(settingMenuBoxRef, () => {
    setIsSettingMenuShow(false);
  });

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(activeUser(null));

    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-between bg-primary-bg px-5 py-3 relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="flex items-center gap-1">
          <Link to={"/"}>
            <img src={rippleLogo} alt="ripple-logo" className="w-[45px]" />
          </Link>

          <h3 className="text-xl font-medium font-segoe-ui ml-2 text-primary-text">
            Ripple
          </h3>
        </div>

        <div
          ref={searchBoxRef}
          className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 z-30"
          onClick={() => setIsSearchBarShow(true)}
        >
          <div className="relative z-[1]">
            <div className="w-[700px]">
              <SearchBox />
            </div>
            
            {isSearchBarshow && (
              <RxCross2
                onClick={() => setIsSearchBarShow(false)}
                className="box-content absolute top-2/4 -translate-y-2/4 right-4 p-1 rounded-full text-lg text-secondary_color transition-all ease-linear duration-100 hover:text-black hover:bg-[#d3e3fd] active:scale-[1.1] cursor-pointer"
              />
            )}
          </div>

          <div
            className={
              isSearchBarshow
                ? "absolute z-0 top-full left-2/4 -translate-x-2/4 bg-white p-4 mt-5 w-[110%] rounded-[16px] visible opacity-100 translate-y-0 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                : "absolute z-0 top-full left-2/4 -translate-x-2/4 bg-white p-4 mt-5 w-[110%] rounded-[16px] invisible opacity-0 -translate-y-5 transition-all ease-linear duration-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            }
          >
            <p className="font-segoe-ui font-medium text-secondary-text ml-2">
              Recent Searches :
            </p>

            <div className="mt-2 min-h-[70px] max-h-[400px] overflow-y-auto">
              {recentSearchList.map((item, index) => (
                <RecentSearchListItem
                  key={index}
                  image={item.image}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2.5">
          <button className="bg-[#e4e6eb] w-[45px] aspect-square flex items-center justify-center rounded-full border border-[#e4e6eb]">
            <FaFacebookMessenger className="text-[23px]" />
          </button>

          <button className="bg-[#e4e6eb] w-[45px] aspect-square rounded-full flex justify-center items-center border border-[#e4e6eb]">
            <IoMdNotifications className="text-[27px]" />
          </button>

          <div ref={settingMenuBoxRef} className="relative">
            <img
              src={user?.profilePicture}
              alt="ripple-logo"
              onClick={() => setIsSettingMenuShow(!isSettingMenuShow)}
              className="w-[45px] aspect-square rounded-full cursor-pointer border"
            />

            {isSettingMenuShow && (
              <div
                id="settings-menu"
                className="w-[400px] bg-white px-4 py-4 absolute top-full right-0 z-30 translate-y-[15px] rounded-[12px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
              >
                <div className="group flex items-center gap-x-3 px-2 py-2.5 rounded-[6px] hover:bg-[#f0f2f5] cursor-pointer transition-all duration-200 ease-in-out">
                  <IoMdSettings className="box-content bg-[#e4e6eb] p-2 rounded-full text-2xl transition-all duration-200 ease-in-out" />{" "}
                  <p className="text-lg  font-inter">Setting</p>
                </div>

                <div className="group flex items-center gap-x-3 px-2 py-2.5 rounded-[6px] hover:bg-[#f0f2f5] cursor-pointer transition-all duration-200 ease-in-out">
                  <MdContactSupport className="box-content bg-[#e4e6eb] p-2 rounded-full text-2xl transition-all duration-200 ease-in-out" />{" "}
                  <p className="text-lg  font-inter">Help and Support</p>
                </div>

                <div className="group flex items-center gap-x-3 px-2 py-2.5 rounded-[6px] hover:bg-[#f0f2f5] cursor-pointer transition-all duration-200 ease-in-out">
                  <MdNightsStay className="box-content bg-[#e4e6eb] p-2 rounded-full text-2xl transition-all duration-200 ease-in-out" />{" "}
                  <p className="text-lg  font-inter">Theme</p>
                </div>

                <div
                  onClick={() => setIsLogoutModalShow(true)}
                  className="group flex items-center gap-x-3 px-2 py-2.5 rounded-[6px] hover:bg-[#f0f2f5] cursor-pointer transition-all duration-200 ease-in-out"
                >
                  <HiOutlineLogout className="box-content bg-[#e4e6eb] p-2 rounded-full text-2xl transition-all duration-200 ease-in-out" />{" "}
                  <p className="text-lg  font-inter">Log out</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        show={isLogoutModalShow}
        setShow={setIsLogoutModalShow}
        className={"w-[450px] py-7 px-10"}
      >
        <p className="font-open-sans text-3xl font-semibold mb-4">
          Are you sure?
        </p>

        <p className="text-lg font-poppins font-semibold text-secondary-text mb-5">
          You want to logout? Once you logout you need to login again. Please
          confirm.
        </p>

        <div className="flex justify-between">
          <button
            onClick={handleLogOut}
            className={
              "bg-[#d2201f] w-[48%] rounded-lg text-lg py-3 text-white font-semibold"
            }
          >
            Yes, Logout!
          </button>
          <button
            onClick={() => setIsLogoutModalShow(false)}
            className={
              "bg-[#c7f1db] w-[48%] rounded-lg text-lg py-3 font-semibold"
            }
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
