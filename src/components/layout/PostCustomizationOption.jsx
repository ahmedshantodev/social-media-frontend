import React from "react";
import addEmojiLogo from "/public/images/feelingsLogo.png";
import galaryLogo from "/public/images/galaryLogo.png";
import tagFriends from "/public/images/tag-friends.png";
import addLocation from "/public/images/add-location.png";
import addGif from "/public/images/add-gif.png";

const PostCustomizationOption = ({
  onMediaClick,
  mediaUploaderShow,
  selectedOption,
  selectedBackgroundInfo,
}) => {

  return (
    <div
      className={
        "flex items-center justify-between border border-primary-border rounded-[6px] py-2 px-5"
      }
    >
      <p className="text-secondary-text font-poppins font-semibold text-[17px] cursor-pointer">
        Add to your post
      </p>

      <div className="flex items-center gap-x-2">
        {selectedOption == "background" || selectedBackgroundInfo ? (
          <button
            className={
              "p-2 rounded-full grayscale-[100%] relative group cursor-not-allowed"
            }
          >
            <img
              src={galaryLogo}
              alt="add-photo-video-icon"
              className="w-[25px]"
            />

            <p className="hidden group-hover:block w-[400px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
              This can't be combined with what you've already added to your post
            </p>
          </button>
        ) : (
          <button
            onClick={onMediaClick}
            className={
              mediaUploaderShow
                ? "p-2 rounded-full bg-tertiary-bg relative group"
                : "p-2 rounded-full hover:bg-tertiary-bg relative group"
            }
          >
            <img
              src={galaryLogo}
              alt="add-photo-video-icon"
              className="w-[25px]"
            />

            <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
              Photo/Video
            </p>
          </button>
        )}

        <button className="p-2 rounded-full hover:bg-tertiary-bg relative group">
          <img src={tagFriends} alt="tag-friends-icon" className="w-[25px]" />

          <p className="hidden group-hover:block w-[120px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
            Tags Friends
          </p>
        </button>

        <button className="p-2 rounded-full hover:bg-tertiary-bg relative group">
          <img src={addEmojiLogo} alt="emoji-icon" className="w-[25px]" />

          <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
            Feeling/Activity
          </p>
        </button>

        <button className="p-2 rounded-full hover:bg-tertiary-bg relative group">
          <img src={addLocation} alt="location-icon" className="w-[25px]" />

          <p className="hidden group-hover:block w-[90px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
            Check in
          </p>
        </button>

        <button className="p-2 rounded-full hover:bg-tertiary-bg relative group">
          <img src={addGif} alt="location-gif" className="w-[25px]" />

          <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-sm font-inter">
            Gif
          </p>
        </button>
      </div>
    </div>
  );
};

export default PostCustomizationOption;
