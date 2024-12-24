import React from "react";
import { useGetAllFriendsListQuery } from "../../../../redux/api/friendsApi";
import ProfileAllFriendListItem from "../../../../components/layout/ProfileAllFriendListItem";

const ProfileFriends = ({ searchValue, profileInfo, }) => {
  const { data: friendList, isLoading } = useGetAllFriendsListQuery(profileInfo?.username);

  const filteredList = friendList?.filter((item) => {
    return searchValue ? item.fullName.toLowerCase().includes(searchValue.toLowerCase()) : item;
  });

  return isLoading ? (
    <div className="flex flex-wrap gap-5 mt-5">
      <div className="w-[49%]">
        <ProfileAllFriendListItem type={"skeleton"} />
      </div>

      <div className="w-[49%]">
        <ProfileAllFriendListItem type={"skeleton"} />
      </div>

      <div className="w-[49%]">
        <ProfileAllFriendListItem type={"skeleton"} />
      </div>

      <div className="w-[49%]">
        <ProfileAllFriendListItem type={"skeleton"} />
      </div>
    </div>
  ) : filteredList?.length == 0 && searchValue ? (
    <div className="w-full h-[149px] flex items-center justify-center">
      <p className="font-inter text-2xl text-secondary-text">
        no results found.
      </p>
    </div>
  ) : filteredList?.length == 0 ? (
    <div className="w-full h-[149px] flex items-center justify-center">
      <div className="text-center">
        <h4 className="font-inter text-2xl mb-2">No Friend</h4>

        <p className="font-roboto text-xl text-secondary-text">
          Friend will appear here.
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap gap-5 mt-5">
      {filteredList?.map((item) => (
        <div key={item._id} className="w-[49%]">
          <ProfileAllFriendListItem info={item} />
        </div>
      ))}
    </div>
  );
};

export default ProfileFriends;
