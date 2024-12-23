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
  const { data: profileInfo, isLoading } =
    useGetProfileInformationQuery(username);

  const user = useSelector((activeUser) => activeUser.user.information);
  const profileVisitor = user?.username != profileInfo?.username;

  const menu = ["intro", "about", "friends", "photos", "groups", "saved posts"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);

  const profileTopPartRef = useRef(null);
  const [profileTopPartHeight, setProfileTopPartHeight] = useState("");

  useEffect(() => {
    setProfileTopPartHeight(profileTopPartRef?.current?.clientHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Ripple{" "}
          {profileInfo ? `| ${profileInfo?.firstName + " " + profileInfo?.lastName}` : "- Where Connections Make Waves"}
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
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`}/>
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`}/>
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`}/>
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`}/>
              <Skeleton type={`box`} className={`w-[100px] h-[25px]`}/>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full h-full">
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
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
