import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import addBackgroudLogo from "/public/images/add-background-logo.png";

const PostStylingOption = ({emojiMenuShow, setEmojiMenuShow}) => {
  return (
    <div className="flex justify-between items-center gap-1 mt-3">
      <button className="w-1/2 flex items-center gap-x-3 hover:bg-secondary-bg py-1 px-2 rounded-[5px]">
        <img
          src={addBackgroudLogo}
          alt="add-background-logo"
          className="w-[40px] aspect-square"
        />
        <p className="text-secondary-text font-poppins text-[17px]">
          Add Background
        </p>
      </button>

      <button
        onClick={() => setEmojiMenuShow(!emojiMenuShow)}
        className={
          emojiMenuShow
            ? "w-1/2 flex items-center gap-x-3 bg-secondary-bg py-1 px-2 rounded-[5px] relative"
            : "w-1/2 flex items-center gap-x-3 hover:bg-secondary-bg py-1 px-2 rounded-[5px] relative"
        }
      >
        <div className="w-[40px] aspect-square flex items-center justify-center">
          <HiOutlineFaceSmile className="text-2xl text-secondary-text" />
        </div>

        <p className="text-secondary-text font-poppins text-[17px]">
          Add Emoji
        </p>

        {emojiMenuShow && (
          <button className="absolute right-4 top-2/4 -translate-y-2/4 bg-white p-[6px] rounded-full">
            <RxCross2 className="text-lg text-secondary-text" />
          </button>
        )}
      </button>
    </div>
  );
};

export default PostStylingOption;
