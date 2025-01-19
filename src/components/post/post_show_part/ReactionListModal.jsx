import React, { useState } from "react";
import Modal from "../../layout/Modal";
import { RxCross2 } from "react-icons/rx";
import like from "/public/images/reaction/like-normal.png";
import love from "/public/images/reaction/love-normal.png";
import care from "/public/images/reaction/care-normal.png";
import haha from "/public/images/reaction/haha-normal.png";
import wow from "/public/images/reaction/wow-normal.png";
import sad from "/public/images/reaction/sad-normal.png";
import angry from "/public/images/reaction/angry-normal.png";
import { Link } from "react-router-dom";
import SecondaryButton from "../../layout/SecondaryButton";

const ReactionListModal = ({
  reacts,
  postReactionCounts,
  isReactionListModalShow,
  setIsReactionListModalShow,
}) => {
  const [menuActiveItem, setMenuActiveItem] = useState("all");
  const filteredReactionList = reacts.filter(
    (item) => item.reaction === menuActiveItem
  );

  return (
    <Modal
      show={isReactionListModalShow}
      setShow={setIsReactionListModalShow}
      className={`w-[700px] px-7 py-5`}
    >
      <button
        onClick={() => setIsReactionListModalShow(false)}
        className="absolute top-4 right-4 bg-tertiary-bg p-2 rounded-full"
      >
        <RxCross2 className="text-[19px] text-secondary-text" />
      </button>

      <div className="flex items-center border-b-[2px]">
        <button
          onClick={() => setMenuActiveItem("all")}
          className={
            menuActiveItem === "all"
              ? "py-4 px-5 rounded-lg capitalize font-poppins text-[16px] font-medium text-secondary-text relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[4px] after:rounded-t-lg"
              : "py-4 px-5 rounded-t-lg capitalize font-poppins text-[16px] font-medium text-secondary-text hover:bg-secondary-bg"
          }
        >
          All
        </button>

        {postReactionCounts.map((item, index) => (
          <button
            key={index}
            onClick={() => setMenuActiveItem(item.reaction)}
            className={
              menuActiveItem === item.reaction
                ? "flex items-center gap-x-1 py-4 px-6 rounded-lg capitalize font-poppins text-[16px] font-medium text-secondary-text relative after:absolute after:bottom-0 after:left-0 after:bg-primary-button after:w-full after:h-[4px] after:rounded-t-lg"
                : "flex items-center gap-x-1 py-4 px-6 rounded-t-lg capitalize font-poppins text-[16px] font-medium text-secondary-text hover:bg-secondary-bg"
            }
          >
            {item.reaction === "like" ? (
              <img
                src={like}
                alt="care"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : item.reaction === "love" ? (
              <img
                src={love}
                alt="love"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : item.reaction === "care" ? (
              <img
                src={care}
                alt="care"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : item.reaction === "haha" ? (
              <img
                src={haha}
                alt="haha"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : item.reaction === "wow" ? (
              <img
                src={wow}
                alt="wow"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : item.reaction === "sad" ? (
              <img
                src={sad}
                alt="sad"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            ) : (
              <img
                src={angry}
                alt="angry"
                className="w-[20px] aspect-square object-cover border border-white box-content"
              />
            )}
            {item.count}
          </button>
        ))}
      </div>

      <div>
        <div className="h-[400px] overflow-y-auto pr-1">
          {(menuActiveItem === "all" ? reacts : filteredReactionList).map(
            (item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-x-3 py-2">
                  <div className="relative">
                    <Link
                      Link
                      to={item.reactorName}
                      className="block w-[50px] aspect-square rounded-full overflow-hidden border cursor-pointer"
                    >
                      <img
                        src={item.reactorProfile}
                        alt={`Monsur Ahmed Shanto`}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="box-content bg-[#31a24c] w-[15px] aspect-square rounded-full border-2 border-white absolute top-[60%] left-[70%] scale-[1.2]">
                      {item.reaction === "like" ? (
                        <img
                          src={like}
                          alt="care"
                          className="w-full aspect-square object-cover"
                        />
                      ) : item.reaction === "love" ? (
                        <img
                          src={love}
                          alt="love"
                          className="w-full aspect-square object-cover"
                        />
                      ) : item.reaction === "care" ? (
                        <img
                          src={care}
                          alt="care"
                          className="w-full aspect-square object-cover"
                        />
                      ) : item.reaction === "haha" ? (
                        <img
                          src={haha}
                          alt="haha"
                          className="w-full aspect-square object-cover"
                        />
                      ) : item.reaction === "wow" ? (
                        <img
                          src={wow}
                          alt="wow"
                          className="w-full aspect-square object-cover"
                        />
                      ) : item.reaction === "sad" ? (
                        <img
                          src={sad}
                          alt="sad"
                          className="w-full aspect-square object-cover"
                        />
                      ) : (
                        <img
                          src={angry}
                          alt="angry"
                          className="w-full aspect-square object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <Link
                      to={item.reactorUserName}
                      className="text-[18px] font-medium font-segoe-ui text-primary-text hover:underline"
                    >
                      {item.reactorName}
                    </Link>
                  </div>
                </div>

                <SecondaryButton>Add Friend</SecondaryButton>
              </div>
            )
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ReactionListModal;
