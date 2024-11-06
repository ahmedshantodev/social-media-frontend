import React from "react";
import { postBackgroundInfo } from "../../data/postBackgroundInfo";

const PostCreateBackgroundPart = ({
  inputRef,
  setbackgroundInfo,
  setIsBackgroundShow,
}) => {
  const handleBackgroundSelect = (item) => {
    inputRef.current?.focus()
    setbackgroundInfo(item);
    setIsBackgroundShow(false);
  };

  const handleBackgroundRemove = () => {
    setbackgroundInfo("");
    setIsBackgroundShow(false);
  };

  return (
    <div
      className={
        "mt-3 w-full h-[200px] flex flex-wrap justify-between gap-3 overflow-y-auto pr-1"
      }
    >
      <div
        onClick={handleBackgroundRemove}
        className="w-[18%] aspect-square rounded-[10px] border border-primary-border flex items-center justify-center cursor-pointer"
      >
        <p className="font-segoe-ui text-[17px] text-secondary-text font-semibold">
          Remove
        </p>
      </div>

      {postBackgroundInfo.map((item, index) => (
        <div
          key={index}
          onClick={() => handleBackgroundSelect(item)}
          className={`w-[18%] aspect-square rounded-[10px] overflow-hidden border border-primary-border cursor-pointer`}
        >
          <img
            src={item.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PostCreateBackgroundPart;
