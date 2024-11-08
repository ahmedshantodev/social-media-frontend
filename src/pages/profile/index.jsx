import React from "react";
import { Helmet } from "react-helmet-async";
import ProfileRightPart from "./ProfileRightPart";
import ProfileLeftPart from "./ProfileLeftPart";
import ProfileHeaderPart from "./ProfileHeaderPart";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api/postApi";

const Profile = () => {
  const { username } = useParams();
  const { data: user } = useGetUserQuery(username)

  return (
    <>
      <Helmet>
        <title>Ripple | Rayhan Ahmed Siam</title>
      </Helmet>

      <section className="w-full h-full">
        <ProfileHeaderPart user={user} />

        <div className="w-[1300px] mx-auto pt-4 flex items-start  gap-x-4">
          <div className="w-[40%]">
            <ProfileLeftPart user={user} />
          </div>

          <div className="w-[60%]">
            <ProfileRightPart user={user} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
