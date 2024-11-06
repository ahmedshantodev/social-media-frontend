import React from "react";
import { Helmet } from "react-helmet-async";
import ProfileRightPart from "./ProfileRightPart";
import ProfileLeftPart from "./ProfileLeftPart";
import ProfileHeaderPart from "./ProfileHeaderPart";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Ripple | Rayhan Ahmed Siam</title>

        <link
          rel="shortcut icon"
          href="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-1/461941312_1216678002987518_7558504774643133394_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=9LIBxAzXFXkQ7kNvgGIfXXP&_nc_zt=24&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AzzSjVep_LPt-zVK0vr9Y5_&oh=00_AYDcAnmy7qwo_Y_KQWcO6jOjXNXVH3Q3pHWyWrGfR-HQJw&oe=67311050"
          type="image/x-icon"
          className="rounded-full"
        />
      </Helmet>

      <section className="w-full h-full">
        <ProfileHeaderPart />

        <div className="w-[1300px] mx-auto pt-4 flex items-start  gap-x-4">
          <div className="w-[40%]">
            <ProfileLeftPart />
          </div>

          <div className="w-[60%]">
            <ProfileRightPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
