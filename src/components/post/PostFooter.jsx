import React, { useRef, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import { PiLinkSimpleBold } from "react-icons/pi";
import like from "/public/images/reaction/like-normal.png";
import love from "/public/images/reaction/love-normal.png";
import ReactionPicker from "./ReactionPicker";
import { IoSend } from "react-icons/io5";
import galaryLogo from "/public/images/galaryLogo.png";
import addEmojiLogo from "/public/images/feelingsLogo.png";
import addGif from "/public/images/add-gif.png";
import AutoResizeTextarea from "./AutoResizeTextarea";
import { RxCross2 } from "react-icons/rx";

const PostFooter = ({ post }) => {
  const commentBoxTextareaRef = useRef(null);
  const [comment, setComment] = useState("");
  const [isCommentShow, setIsCommentShow] = useState(false);
  const [selectedImages, setSelectedImages] = useState("");

  const handleImageSelect = (e) => {
    const images = Array.from(e.target.files);

    images.forEach((image) => {
      if (
        image.type == "image/jpeg" ||
        image.type == "image/png" ||
        image.type == "image/webp" ||
        image.type == "image/gif"
      ) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (readerImage) => {
          setSelectedImages((prev) => [...prev, readerImage.target.result]);
        };
      }
    });
  };

  const handleRemoveImage = (index) => {
    const newItem = selectedImages.filter((item, findex) => index !== findex);
    setSelectedImages(newItem);
  };

  return (
    <div className="border-t border-[#e5e5e5]">
      <div className="flex items-center justify-between border-b border-[#e5e5e5] mx-4 py-2.5">
        <div className="flex items-center gap-x-1">
          <div className="flex items-center">
            <img
              src={like}
              alt="love"
              className="w-[20px] aspect-square object-cover border border-white box-content"
            />
            <img
              src={love}
              alt="love"
              className="w-[20px] aspect-square object-cover border border-white box-content"
            />
          </div>

          <p className="font-poppins text-[17px] mt-[3px] text-secondary-text hover:underline cursor-pointer leading-[0.8]">
            9.8k
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <p className="font-poppins text-[15px] text-secondary-text hover:underline cursor-pointer">
            345 comments
          </p>

          <p className="font-poppins text-[15px] text-secondary-text hover:underline cursor-pointer">
            124 shares
          </p>
        </div>
      </div>

      <div className="px-1 py-[3px] flex items-center">
        <div className="w-1/4 relative group">
          <button className="w-full flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
            <FiThumbsUp className="text-[#606266] text-[22px]" />

            <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
              Like
            </p>
          </button>

          <ReactionPicker />
        </div>

        <button
          onClick={() => setIsCommentShow(!isCommentShow)}
          className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out"
        >
          <RiChat3Line className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Comment
          </p>
        </button>

        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <PiLinkSimpleBold className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Copy
          </p>
        </button>

        <button className="w-1/4 flex items-center justify-center gap-x-2 py-[6px] hover:bg-[#e4e6e9] rounded-[6px] transition-all duration-150 ease-in-out">
          <PiShareFatBold className="text-[#606266] text-[22px]" />
          <p className="font-segoe-ui font-medium text-[18px] text-[#606266]">
            Share
          </p>
        </button>
      </div>

      {isCommentShow && (
        <div
          id="comment-section"
          className="border-t border-[#e5e5e5] mx-4 py-2"
        >
          <div className="flex items-start gap-x-2">
            <div className="w-[40px] aspect-square rounded-full overflow-hidden">
              <img
                src={post?.user?.profilePicture}
                alt={post?.user?.firstName + " " + post?.user?.lastName}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="w-full">
              <div className="w-full relative bg-[#f0f2f5] rounded-[16px] overflow-hidden px-3 py-2">
                <AutoResizeTextarea
                  row="1"
                  id="comment"
                  name="comment"
                  textareaRef={commentBoxTextareaRef}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={`Comment as ${post?.user?.firstName + " " + post?.user?.lastName}`}
                  className="w-full bg-[#f0f2f5] max-h-[400px] resize-none text-[17px] placeholder:text-[#65676b] font-segoe-ui outline-none"
                />

                {selectedImages && (
                  <div className="mt-2.5 mb-1 flex gap-x-2">
                    {selectedImages.map((item, index) => (
                      <div key={index} className="w-[120px] h-[90px] relative">
                        <img
                          src={item}
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />

                        <RxCross2
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1 right-1 text-sm box-content p-[2px] border border-primary-border text-secondary-text bg-white rounded-full cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="file"
                        className="hidden"
                        id="comment-section-image"
                        multiple={true}
                        onChange={handleImageSelect}
                        accept="image/jpeg,image/png,image/webp,image/gif"
                      />

                      <label
                        title="add photo"
                        htmlFor="comment-section-image"
                        className="block box-content p-[7px] rounded-full hover:bg-white transition-all cursor-pointer"
                      >
                        <img
                          src={galaryLogo}
                          alt="add-gif"
                          className="w-[20px] aspect-square object-cover"
                        />
                      </label>
                    </div>

                    <button
                      title="add emoji"
                      className="box-content p-[7px] rounded-full hover:bg-white transition-all"
                    >
                      <img
                        src={addEmojiLogo}
                        alt="add-gif"
                        className="w-[20px] aspect-square object-cover"
                      />
                    </button>

                    <button
                      title="add gif"
                      className="box-content p-[7px] rounded-full hover:bg-white transition-all"
                    >
                      <img
                        src={addGif}
                        alt="add-gif"
                        className="w-[20px] aspect-square object-cover"
                      />
                    </button>
                  </div>

                  <button title="send comment">
                    <IoSend className="text-primary-button text-lg hover:scale-[1.1] active:scale-[0.99] transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFooter;
