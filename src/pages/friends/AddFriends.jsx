import React, { useState } from "react";
import SearchBox from "../../components/layout/SearchBox";
import UserList from "../../components/layout/UserListItem";
import { useGetAddFriendsListQuery } from "../../redux/api/friendsApi";
import { useSelector } from "react-redux";

const AddFriends = () => {
  const [searchValue, setSearchValue] = useState("");
  const user = useSelector((activeUser) => activeUser.user.information);
  const { data, isLoading } = useGetAddFriendsListQuery(user.username);

  const filteredList = data?.filter((item) => {
    return searchValue ? item.fullName.toLowerCase().includes(searchValue.toLowerCase()) : item;
  });

  return (
    <div className="w-full h-full">
      <div className={"h-[8%] flex items-center justify-between"}>
        <h4 className="font-inter text-[20px] font-semibold">
          Friend Suggestions
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
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
          <div className="w-[15.7%]">
            <UserList type={`skeleton`} />
          </div>
        </div>
      ) : filteredList?.length == 0 && searchValue ? (
        <div className="w-full h-[92%] flex items-center justify-center">
          <p className="font-inter text-3xl text-secondary-text">
            no results found.
          </p>
        </div>
      ) : filteredList?.length == 0 ? (
        <div className="w-full h-[92%] flex items-center justify-center">
          <div className="text-center">
            <h4 className="font-inter text-3xl mb-2">No Friend Suggetions</h4>

            <p className="font-roboto text-2xl text-secondary-text">
              Friend suggetions will appear here.
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
            <div key={index} className="w-[15.7%]">
              <UserList info={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddFriends;
