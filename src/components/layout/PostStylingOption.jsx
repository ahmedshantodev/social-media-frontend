import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import addBackgroudLogo from "/public/images/add-background-logo.png";
import { postBackgroundInfo } from "../../data/postBackgroundInfo";
import EmojiPicker from "emoji-picker-react";

const PostStylingOption = ({
  inputRef,
  inputData,
  setInputData,
  selectedOption,
  setSelectedOption,
  mediaUploaderShow,
  setselectedBackgroundInfo,
}) => {
  const scrollRef = useRef();
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [selectedOption]);

  const handleBackgroundSelect = (item) => {
    setselectedBackgroundInfo(item);
    setSelectedOption("");
  };

  const handleBackgroundRemove = () => {
    setselectedBackgroundInfo("");
    setSelectedOption("");
  };

  const handleEmojiClick = (e) => {
    const emoji = e.emoji;
    inputRef.current.focus();

    const start = inputData.substring(0, inputRef.current.selectionStart);
    const end = inputData.substring(inputRef.current.selectionStart);

    setInputData(start + e.emoji + end);
    setCursorPosition(start.length + e.emoji.length);
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <div>
      <div className="flex justify-between items-center gap-1">
        {selectedOption == "background" ? (
          <button
            onClick={() => setSelectedOption("")}
            className={
              "w-1/2 flex items-center gap-x-3 bg-secondary-bg py-1 px-2 rounded-[5px] relative"
            }
          >
            <img
              src={addBackgroudLogo}
              alt="add-background-logo"
              className="w-[40px] aspect-square"
            />
            <p className="text-secondary-text font-poppins text-[17px]">
              Add Background
            </p>

            <button className="absolute right-4 top-2/4 -translate-y-2/4 bg-white p-[6px] rounded-full">
              <RxCross2 className="text-lg text-secondary-text" />
            </button>
          </button>
        ) : !mediaUploaderShow && (
          <button
            onClick={() => setSelectedOption("background")}
            className={
              "w-1/2 flex items-center gap-x-3 hover:bg-secondary-bg py-1 px-2 rounded-[5px] relative"
            }
          >
            <img
              src={addBackgroudLogo}
              alt="add-background-logo"
              className="w-[40px] aspect-square"
            />
            <p className="text-secondary-text font-poppins text-[17px]">
              Add Background
            </p>
          </button>
        )}

        {selectedOption == "emoji" ? (
          <button
            onClick={() => setSelectedOption("")}
            className={
              mediaUploaderShow
                ? "w-full flex items-center gap-x-3 bg-secondary-bg py-1 px-2 rounded-[5px] relative"
                : "w-1/2 flex items-center gap-x-3 bg-secondary-bg py-1 px-2 rounded-[5px] relative"
            }
          >
            <div className="w-[40px] aspect-square flex items-center justify-center">
              <HiOutlineFaceSmile className="text-2xl text-secondary-text" />
            </div>

            <p className="text-secondary-text font-poppins text-[17px]">
              Add Emoji
            </p>

            <button className="absolute right-4 top-2/4 -translate-y-2/4 bg-white p-[6px] rounded-full">
              <RxCross2 className="text-lg text-secondary-text" />
            </button>
          </button>
        ) : (
          <button
            onClick={() => setSelectedOption("emoji")}
            className={
              mediaUploaderShow 
                ? "w-full flex items-center gap-x-3 hover:bg-secondary-bg py-1 px-2 rounded-[5px] relative"
                : "w-1/2 flex items-center gap-x-3 hover:bg-secondary-bg py-1 px-2 rounded-[5px] relative"
            }
          >
            <div className="w-[40px] aspect-square flex items-center justify-center">
              <HiOutlineFaceSmile className="text-2xl text-secondary-text" />
            </div>

            <p className="text-secondary-text font-poppins text-[17px]">
              Add Emoji
            </p>
          </button>
        )}
      </div>

      <div
        className={
          selectedOption == "background"
            ? "mt-3 w-full h-[200px] visible opacity-100 flex justify-between flex-wrap gap-2.5 px-1 overflow-y-auto transition-all duration-150 ease-in-out"
            : "mt-3 w-full h-0 hidden invisible opacity-0 transition-all duration-150 ease-in-out"
        }
      >
        <div
          onClick={handleBackgroundRemove}
          className="w-[18%] aspect-square rounded-[10px] border border-primary-border flex items-center justify-center cursor-pointer"
        >
          <p className="font-inter text-secondary-text font-semibold">Remove</p>
        </div>
        {postBackgroundInfo.map((item, index) => (
          <div
            key={index}
            onClick={() => handleBackgroundSelect(item)}
            className={`w-[18%] aspect-square rounded-[10px] overflow-hidden border-primary-border cursor-pointer`}
          >
            <img
              src={item.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div ref={scrollRef} />

      <div
        className={
          selectedOption == "emoji"
            ? "w-full h-[230px] visible opacity-100 transition-all duration-150 ease-in-out"
            : "w-full h-0 invisible hidden opacity-0 transition-all duration-150 ease-in-out"
        }
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          emojiStyle={"facebook"}
          searchDisabled={"false"}
          previewConfig={{
            showPreview: false,
          }}
          className={"!w-full !h-full !border-none"}
        />
      </div>
    </div>
  );
};

export default PostStylingOption;
