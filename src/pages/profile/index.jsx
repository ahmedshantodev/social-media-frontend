import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProfileInformationQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import ProfileTopPart from "./profile_top_part";
import ProfileBottomPart from "./profile_bottom_part";

const Profile = () => {
  const { username } = useParams();
  const { data: profileInfo, isLoading } = useGetProfileInformationQuery(username);

  const user = useSelector((activeUser) => activeUser.user.information);
  const visitor = user?.username === profileInfo?.username;

  const menu = ["intro", "about", "friends", "photos", "groups", "saved posts"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);

  const profileTopPartRef = useRef(null);
  const [profileTopPartHeight, setProfileTopPartHeight] = useState("");

  useEffect(() => {
    setProfileTopPartHeight(profileTopPartRef.current.clientHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Ripple {profileInfo ? `| ${profileInfo?.firstName + " " + profileInfo?.lastName}` : "- Where Connections Make Waves"}
        </title>
      </Helmet>

      <section className="w-full h-full">
        <ProfileTopPart
          profileInfo={profileInfo}
          visitor={visitor}
          user={user}
          menu={menu}
          menuActiveItem={menuActiveItem}
          profileTopPartRef={profileTopPartRef}
          setMenuActiveItem={setMenuActiveItem}
        />

        <div className="w-[1300px] mx-auto py-4">
          <ProfileBottomPart
            user={user}
            profileInfo={profileInfo}
            visitor={visitor}
            isLoading={isLoading}
            menuActiveItem={menuActiveItem}
            setMenuActiveItem={setMenuActiveItem}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
