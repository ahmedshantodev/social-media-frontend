import React, { useState } from "react";
import FriendListItem from "../../components/layout/FriendListItem";
import SearchBox from "../../components/layout/SearchBox";
import { useGetAllFriendsListQuery } from "../../redux/api/friendsApi";
import { useSelector } from "react-redux";

const AllFriends = () => {
  const [searchValue, setSearchValue] = useState("");
  const user = useSelector((activeUser) => activeUser.user.information);
  const { data, isLoading } = useGetAllFriendsListQuery(user.username);

  const filteredList = data?.filter((item) => {
    return searchValue ? item.fullName.toLowerCase().includes(searchValue.toLowerCase()) : item;
  });

  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">
          All Friend <span className="text-[#707276]">(290 friends)</span>
        </h4>

        <div className="w-[500px]">
          <SearchBox onChange={(e) => setSearchValue(e.target.value)} />
        </div>
      </div>

      {isLoading ? (
        <div
          className={
            "max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"
          }
        >
          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>

          <div className="w-[32.5%]">
            <FriendListItem type={"medium-skeleton"} />
          </div>
        </div>
      ) : filteredList?.length === 0 && searchValue ? (
        <div className="w-full h-[92%] flex items-center justify-center">
          <p className="font-inter text-3xl text-secondary-text">
            no results found.
          </p>
        </div>
      ) : filteredList?.length === 0 ? (
        <div className="w-full h-[92%] flex items-center justify-center">
          <div className="text-center">
            <h4 className="font-inter text-3xl mb-2">No Friends</h4>

            <p className="font-roboto text-2xl text-secondary-text">
              Your Friends will appear here.
            </p>
          </div>
        </div>
      ) : (
        <div
          className={
            "max-h-[92%] overflow-y-auto flex flex-wrap gap-4 mt-4 pr-1"
          }
        >
          {filteredList?.map((item, index) => (
            <div key={index} className="w-[32.5%]">
              <FriendListItem info={item} type={"medium"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;
