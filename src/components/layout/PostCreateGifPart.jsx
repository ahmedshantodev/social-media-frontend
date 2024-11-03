import GifPicker from "gif-picker-react";
import React from "react";

const PostCreateGifPart = ({ gif, setGif, isGifShow, setIsGifShow }) => {
  // gif select function
  const handleGifClick = (e) => {
    setGif(e);
  };

  return (
    <div className="mt-2">
      {gif ? (
        <img
          src={gif.url}
          alt={gif.description}
          className="w-full rounded-[6px] border border-primary-border"
        />
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
