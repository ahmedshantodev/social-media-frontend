import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProfileInformationQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import ProfileTopPart from "./profile_top_part";
import ProfileBottomPart from "./profile_bottom_part";
import Skeleton from "../../components/layout/Skeleton";

const Profile = () => {
  const { username } = useParams();
  const { data: profileInfo, isLoading } = useGetProfileInformationQuery(username);

  const user = useSelector((activeUser) => activeUser.user.information);
  const profileVisitor = user?.username != profileInfo?.username;

  const menu = profileVisitor
    ? ["intro", "friends", "photos", "videos", "groups", "saved posts"]
    : ["intro", "photos", "videos", "groups", "saved posts"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);

  const profilePageRef = useRef(null);
  const profileTopPartRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [profileTopPartHeight, setProfileTopPartHeight] = useState("");

  useEffect(() => {
    setProfileTopPartHeight(profileTopPartRef?.current?.clientHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(profilePageRef?.current?.scrollTop);
    };
    profilePageRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      profilePageRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    profileTopPartRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Ripple{" "}
          {profileInfo
            ? `| ${profileInfo?.firstName + " " + profileInfo?.lastName}`
            : "- Where Connections Make Waves"}
        </title>
      </Helmet>

      {isLoading ? (
        <section className="w-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="w-[1300px] mx-auto">
            <div className="w-full relative">
              <Skeleton
                type={`box`}
                className={`w-full h-[500px] !rounded-t-none !rounded-b-[12px]`}
              />

              <div className="absolute top-full left-12 z-20 -translate-y-[40%] border-4 border-white rounded-full">
                <div
                  className={`w-[190px] aspect-square rounded-full bg-gray-300`}
                />
              </div>
            </div>

            <div className="w-full h-[135px] pl-[270px] pt-[25px]">
              <Skeleton
                type={`box`}
                className={`w-[220px] h-[25px] !rounded-xls`}
              />

              <Skeleton
                type={`box`}
                className={`w-[180px] h-[20px] mt-2 !rounded-xls`}
              />
            </div>

            <div className="mt-1 border-t-2 border-primary-border/50 py-4 flex items-center gap-x-5">
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`} />
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`} />
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`} />
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`} />
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`} />
            </div>
          </div>
        </section>
      ) : (
        <section ref={profilePageRef} className="w-full h-full overflow-y-auto">
          {profileTopPartHeight <= scrollPosition && (
            <div className="bg-white sticky z-50 top-0 left-0 w-screen border-t border-primary-border/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="w-[1300px] mx-auto py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-[50px] rounded-full overflow-hidden border border-primary-border">
                    <img
                      src={profileInfo?.profilePicture}
                      alt={profileInfo?.fullName}
                      className="w-full aspect-square object-cover"
                    />
                  </div>

                  <h4 className="text-xl font-semibold">
                    {profileInfo?.fullName}
                  </h4>
                </div>

                <div
                  onClick={handleBackToTop}
                  className="text-xl font-semibold bg-secondary-bg py-3 px-5 rounded-lg cursor-pointer"
                >
                  Back to top
                </div>
              </div>
            </div>
          )}

          <ProfileTopPart
            user={user}
            menu={menu}
            profileInfo={profileInfo}
            profileVisitor={profileVisitor}
            menuActiveItem={menuActiveItem}
            profileTopPartRef={profileTopPartRef}
            setMenuActiveItem={setMenuActiveItem}
          />

          <div className="w-[1300px] mx-auto py-4">
            <ProfileBottomPart
              user={user}
              isLoading={isLoading}
              profileInfo={profileInfo}
              menuActiveItem={menuActiveItem}
              profileVisitor={profileVisitor}
              setMenuActiveItem={setMenuActiveItem}
              scrollPosition={scrollPosition}
              profileTopPartHeight={profileTopPartHeight}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
