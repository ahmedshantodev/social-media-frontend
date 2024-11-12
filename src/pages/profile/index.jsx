import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProfileRightPart from "./ProfileRightPart";
import ProfileLeftPart from "./ProfileLeftPart";
import ProfileHeaderPart from "./ProfileHeaderPart";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import ProfileAboutPart from "./ProfileAboutPart";

const Profile = () => {
  const { username } = useParams();
  const { data, isLoading } = useGetUserQuery(username);
  const user = useSelector((activeUser) => activeUser.user.information);
  const visitor = user?.username === data?.username;

  const menu = ["post", "about", "friends", "groups", "photos", "pinned posts"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);

  const profileHeaderRef = useRef(null);
  const [profileHeaderHeight, setProfileHeaderHeight] = useState("");

  useEffect(() => {
    setProfileHeaderHeight(profileHeaderRef.current.clientHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Ripple{" "}
          {data
            ? `| ${data?.firstName + " " + data?.lastName}`
            : "- Where Connections Make Waves"}
        </title>
      </Helmet>

      <section className="w-full h-full">
        <ProfileHeaderPart
          data={data}
          visitor={visitor}
          user={user}
          menu={menu}
          menuActiveItem={menuActiveItem}
          profileHeaderRef={profileHeaderRef}
          setMenuActiveItem={setMenuActiveItem}
        />

        <div className="w-[1300px] mx-auto pt-4 flex items-start  gap-x-4">
          {menuActiveItem === "about" ? (
            <ProfileAboutPart />
          ) : (
            <>
              <div className="w-[40%]">
                <ProfileLeftPart
                  data={data}
                  visitor={visitor}
                  isLoading={isLoading}
                  menuActiveItem={menuActiveItem}
                  setMenuActiveItem={setMenuActiveItem}
                />
              </div>

              <div className="w-[60%]">
                <ProfileRightPart data={data} visitor={visitor} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
