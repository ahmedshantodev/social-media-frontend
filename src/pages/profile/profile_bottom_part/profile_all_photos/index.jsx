import React, { useState } from "react";

const ProfileAllPhotos = ({ profileInfo }) => {
  const menu = ["all photos", "profile picture", "cover photo", "post image"];
  const [menuActiveItem, setMenuActiveItem] = useState(menu[0]);
  const images = profileInfo?.images?.resources;

  const filterdImages = images?.filter((item) => {
    if (menuActiveItem === "all photos") {
      return item;
    }

    if (menuActiveItem === "profile picture") {
      return (item.asset_folder === `user-image/${profileInfo?.username}/profile-picture`);
    }

    if (menuActiveItem === "cover photo") {
      return (item.asset_folder === `user-image/${profileInfo?.username}/cover-photo`);
    }

    if (menuActiveItem === "post image") {
      return (item.asset_folder === `user-image/${profileInfo?.username}/post-image`);
    }
  });

  return (
    <div className="full bg-white py-4 px-5 mb-10 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="border-b border-primary-border">
        <p className="font-poppins text-xl font-medium">Friends</p>

        <div className="w-full flex items-center justify-between mt-2">
          <div>
            {menu.map((item, index) => (
              <button
                key={index}
                onClick={() => setMenuActiveItem(item)}
                className={
                  menuActiveItem === item
                    ? "py-4 px-5 rounded-lg capitalize font-poppins text-[16px] font-medium text-secondary-text relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[4px] after:rounded-t-lg"
                    : "py-4 px-5 rounded-t-lg capitalize font-poppins text-[16px] font-medium text-secondary-text hover:bg-secondary-bg"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {filterdImages?.length == 0 ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            {menuActiveItem === "all photos" ? (
              <div className="text-center">
                <h4 className="font-inter text-2xl mb-2">No Photos</h4>

                <p className="font-roboto text-xl text-secondary-text">
                  Photos will appear here.
                </p>
              </div>
            ) : menuActiveItem === "profile picture" ? (
              <div className="text-center">
                <h4 className="font-inter text-2xl mb-2">No profile picture</h4>

                <p className="font-roboto text-xl text-secondary-text">
                  Profile picture will appear here.
                </p>
              </div>
            ) : menuActiveItem === "cover photo" ? (
              <div className="text-center">
                <h4 className="font-inter text-2xl mb-2">No Cover Photo</h4>

                <p className="font-roboto text-xl text-secondary-text">
                  Cover Photo will appear here.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <h4 className="font-inter text-2xl mb-2">No post image</h4>

                <p className="font-roboto text-xl text-secondary-text">
                  Post images will appear here.
                </p>
              </div>
            )}
          </div>
        ) : (
          filterdImages?.map((item) => (
            <div className="w-[16%] rounded-md overflow-hidden border border-primary-border/50">
              <img
                src={item.url}
                alt={item.asset_id}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileAllPhotos;
