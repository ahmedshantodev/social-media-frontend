import React from "react";
import GifPicker from "gif-picker-react";
import { RxCross2 } from "react-icons/rx";

const PostCreateGifPart = ({ gif, setGif, isGifShow, setIsGifShow }) => {  
  const handleGifClick = (e) => {
    setGif(e);
  };

  const handleGifRemove = () => {
    setGif("");
  };

  return (
    <div className="mt-2">
      {gif ? (
        <div className="relative">
          <img
            src={gif.url}
            alt={gif.description}
            className="w-full rounded-[6px] border border-primary-border"
          />

          <button
            onClick={handleGifRemove}
            className={
              "box-content bg-white p-[6px] rounded-full absolute top-4 right-4 z-10 border border-primary-border hover:bg-tertiary-bg"
            }
          >
            <RxCross2 className="text-xl" />
          </button>
        </div>
      ) : (
        <GifPicker
          width={"100%"}
          height={"350px"}
          tenorApiKey={"AIzaSyAW7la2woNuMnvq7z-KCOavIuaKyeQX_jg"}
          onGifClick={handleGifClick}
        />
      )}
    </div>
  );
};

export default PostCreateGifPart;
