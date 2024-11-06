import React from "react";
import addBackgroudLogo from "/public/images/add-background-logo.png";
import galaryLogo from "/public/images/galaryLogo.png";
import addEmojiLogo from "/public/images/feelingsLogo.png";
import tagFriends from "/public/images/tag-friends.png";
import addGif from "/public/images/add-gif.png";
import { RxCross2 } from "react-icons/rx";

const PostCustomizationOption = ({
  gif,
  setGif,
  isGifShow,
  setIsGifShow,
  postImages,
  setPostImages,
  backgroundInfo,
  isBackgroundShow,
  setBackgroundInfo,
  setIsBackgroundShow,
  feelingSelectorShow,
  isImageUploaderShow,
  setIsImageUploaderShow, 
  setFeelingSelectorShow,
}) => {
  
  const removeBackground = () => {
    setBackgroundInfo("")
    setIsBackgroundShow(false)
  }

  const removeImages = () => {
    setPostImages([])
    setIsImageUploaderShow(false)
  }

  const removeGif = () => {
    setGif("")
    setIsGifShow(false)
  }


  return (
    <div
      className={
        "flex items-center justify-between border border-primary-border rounded-[6px] py-2 px-5 mr-1"
      }
    >
      <p className="text-secondary-text font-segoe-ui font-semibold text-[18px]">
        Add to your post
      </p>

      <div className="flex items-center gap-x-2">
        {isImageUploaderShow || isGifShow || gif ? (
          <button
            className={
              "grayscale-[100%] cursor-not-allowed p-[6px] rounded-full relative group"
            }
          >
            <img
              src={addBackgroudLogo}
              alt="tag-friends-icon"
              className="w-[30px]"
            />

            <p className="hidden group-hover:block w-[280px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-2 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              This can't be combined with what you've already added to your post
            </p>
          </button>
        ) : isBackgroundShow ? (
          <button
            onClick={removeBackground}
            className={"p-2.5 rounded-full bg-tertiary-bg relative group"}
          >
            <RxCross2 className="text-xl text-secondary-text" />

            <p className="hidden group-hover:block w-[170px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              remove background
            </p>
          </button>
        ) : (
          <button
            onClick={() => setIsBackgroundShow(!isBackgroundShow)}
            className={
              "p-[6px] rounded-full hover:bg-tertiary-bg relative group"
            }
          >
            <img
              src={addBackgroudLogo}
              alt="tag-friends-icon"
              className="w-[30px]"
            />

            <p className="hidden group-hover:block w-[145px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              Add background
            </p>
          </button>
        )}

        {isBackgroundShow || backgroundInfo || isGifShow || gif ? (
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

            <p className="hidden group-hover:block w-[280px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-2 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              This can't be combined with what you've already added to your post
            </p>
          </button>
        ) : isImageUploaderShow ? (
          <button
            onClick={removeImages}
            className={"p-2.5 rounded-full bg-tertiary-bg relative group"}
          >
            <RxCross2 className="text-xl text-secondary-text" />

            <p className="hidden group-hover:block w-[130px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              remove Photo
            </p>
          </button>
        ) : (
          <button
            onClick={() => setIsImageUploaderShow(!isImageUploaderShow)}
            className={
              isImageUploaderShow
                ? "p-2 rounded-full bg-tertiary-bg relative group"
                : "p-2 rounded-full hover:bg-tertiary-bg relative group"
            }
          >
            <img
              src={galaryLogo}
              alt="add-photo-video-icon"
              className="w-[25px]"
            />

            <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              Photo
            </p>
          </button>
        )}

        <button className="p-2 rounded-full hover:bg-tertiary-bg relative group">
          <img src={tagFriends} alt="tag-friends-icon" className="w-[25px]" />

          <p className="hidden group-hover:block w-[120px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
            Tags Friends
          </p>
        </button>

        {feelingSelectorShow ? (
          <button
            onClick={() => setFeelingSelectorShow(!feelingSelectorShow)}
            className={"p-2.5 rounded-full bg-tertiary-bg relative group"}
          >
            <RxCross2 className="text-xl text-secondary-text" />

            <p className="hidden group-hover:block w-[150px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              remove Feelings
            </p>
          </button>
        ) : (
          <button
            onClick={() => setFeelingSelectorShow(!feelingSelectorShow)}
            className={"p-2 rounded-full hover:bg-tertiary-bg relative group"}
          >
            <img src={addEmojiLogo} alt="emoji-icon" className="w-[25px]" />

            <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              Feelings
            </p>
          </button>
        )}

        {isImageUploaderShow || postImages.length > 0 || isBackgroundShow || backgroundInfo ? (
          <button
            className={
              "p-2 rounded-full grayscale-[100%] relative group cursor-not-allowed"
            }
          >
            <img src={addGif} alt="add-photo-video-icon" className="w-[25px]" />

            <p className="hidden group-hover:block w-[280px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-2 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              This can't be combined with what you've already added to your post
            </p>
          </button>
        ) : gif || isGifShow ? (
          <button
            onClick={removeGif}
            className="p-2.5 rounded-full bg-tertiary-bg relative group"
          >
            <RxCross2 className="text-xl text-secondary-text" />

            <p className="hidden group-hover:block w-[110px] absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c]/90 text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              remove Gif
            </p>
          </button>
        ) : (
          <button
            onClick={() => setIsGifShow(!isGifShow)}
            className="p-2 rounded-full hover:bg-tertiary-bg relative group"
          >
            <img src={addGif} alt="location-gif" className="w-[25px]" />

            <p className="hidden group-hover:block absolute bottom-full left-2/4 -translate-x-2/4 z-30 bg-[#3c3c3c] text-white px-4 py-2 rounded-[10px] text-[15px] font-segoe-ui">
              Gif
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCustomizationOption;
