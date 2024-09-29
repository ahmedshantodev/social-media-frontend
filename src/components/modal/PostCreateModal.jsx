import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { RxCross2 } from "react-icons/rx";
import PostCustomizationOption from "../layout/PostCustomizationOption";
import EmojiMenu from "../layout/EmojiMenu";
import PostStylingOption from "../layout/PostStylingOption";
import MediaUploader from "../layout/MediaUploader";

const PostCreateModal = ({ show, setShow }) => {
  const inputRef = useRef(null);
  const [postData, setPostData] = useState("");
  const [emojiMenuShow, setEmojiMenuShow] = useState(false);
  const [mediaUploaderShow, setMediaUploaderShow] = useState(false);

  return (
    <Modal show={show} setShow={setShow} className={`w-[600px] py-5 relative`}>
      <p className="text-center text-primary-text font-poppins font-semibold text-lg border-b-2 border-primary-border pb-3">
        Create Post
      </p>

      <button
        onClick={() => setShow(false)}
        className="absolute top-4 right-4 bg-tertiary-bg p-2 rounded-full"
      >
        <RxCross2 className="text-[19px] text-secondary-text" />
      </button>

      <div className="px-6">
        <div className="mt-4 flex items-center gap-x-3">
          <div>
            <img
              src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/428701429_399313009412651_7021363013979176346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4_IxSHnyrGMQ7kNvgFzWzYZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=An_R3pvhv819fGSedV0nki8&oh=00_AYDxn0_RYFKF4166DfDPvfwMdkljjesROAUbibkQ193Yug&oe=66FEFFA4"
              alt=""
              className="w-[45px] aspect-square rounded-full border border-primary-border"
            />
          </div>

          <p className="font-inter text-lg text-primary-text font-semibold">
            Monsur Ahmed Shanto
          </p>
        </div>

        <textarea
          name="post"
          id="post"
          ref={inputRef}
          value={postData}
          placeholder="What's on your mind, Monsur?"
          onChange={(e) => setPostData(e.target.value)}
          className={
            postData.length > 200 || mediaUploaderShow
              ? "w-full mt-2 border-none focus:outline-none rounded-[6px] min-h-[150px] max-h-[200px] py-2 placeholder:text-lg text-lg placeholder:text-[#65676b]"
              : "w-full mt-2 border-none focus:outline-none rounded-[6px] min-h-[150px] max-h-[200px] py-2 placeholder:text-[23px] text-2xl placeholder:text-[#65676b]"
          }
        />

        <MediaUploader
          show={mediaUploaderShow}
          setShow={setMediaUploaderShow}
        />

        <PostStylingOption
          emojiMenuShow={emojiMenuShow}
          setEmojiMenuShow={setEmojiMenuShow}
        />

        <div
          className={
            emojiMenuShow
              ? "w-full h-[230px] visible opacity-100 transition-all duration-150 ease-in-out"
              : "w-full h-0 invisible opacity-0 transition-all duration-150 ease-in-out"
          }
        >
          <EmojiMenu
            inputRef={inputRef}
            inputData={postData}
            setInputData={setPostData}
            emojiStyle={"facebook"}
            searchDisabled={"false"}
            className={"!w-full !h-full !border-none"}
          />
        </div>

        <PostCustomizationOption
          onMediaClick={() => setMediaUploaderShow(!mediaUploaderShow)}
        />

        <button
          className={
            postData
              ? "w-full mt-3 rounded-[6px] py-2.5 bg-primary-button text-lg font-poppins font-medium text-white cursor-pointer"
              : "w-full mt-3 rounded-[6px] py-2.5 bg-tertiary-bg text-lg font-poppins font-medium text-secondary-text cursor-not-allowed"
          }
        >
          Next
        </button>
      </div>
    </Modal>
  );
};

export default PostCreateModal;
