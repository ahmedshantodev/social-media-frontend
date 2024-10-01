import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { RxCross2 } from "react-icons/rx";
import PostCustomizationOption from "../layout/PostCustomizationOption";
import PostStylingOption from "../layout/PostStylingOption";
import MediaUploader from "../layout/MediaUploader";

const PostCreateModal = ({ show, setShow }) => {
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState("");
  const [selectedBackgroundInfo, setselectedBackgroundInfo] = useState("");
  const [mediaUploaderShow, setMediaUploaderShow] = useState(false);
  const [postImages, setPostImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Modal
      show={show}
      setShow={setShow}
      className={`w-[570px] max-h-[85%] py-5 relative`}
    >
      <p className="text-center text-primary-text font-poppins font-semibold text-lg border-b-2 border-primary-border pb-3">
        Create Post
      </p>

      <button
        onClick={() => setShow(false)}
        className="absolute top-4 right-4 bg-tertiary-bg p-2 rounded-full"
      >
        <RxCross2 className="text-[19px] text-secondary-text" />
      </button>

      <div className="px-4">
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

        <div className="w-full max-h-[480px] overflow-y-auto px-2 mt-1 mb-2">
          {selectedBackgroundInfo != "" ? (
            <div className="mt-2 w-full h-[390px] relative mb-2">
              <textarea
                name="post"
                id="post"
                ref={inputRef}
                value={inputData}
                placeholder="What's on your mind, Monsur?"
                onChange={(e) => setInputData(e.target.value)}
                className={`w-full h-full absolute top-0 left-0 z-10 bg-transparent border-none focus:outline-none rounded-[6px] resize-none py-2 placeholder:text-[23px] text-3xl placeholder:text-white`}
              />

              <div className="w-full h-full absolute top-0 left-0">
                <img
                  src={selectedBackgroundInfo.background}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <textarea
              name="post"
              id="post"
              ref={inputRef}
              value={inputData}
              placeholder="What's on your mind, Monsur?"
              onChange={(e) => setInputData(e.target.value)}
              className={
                mediaUploaderShow
                  ? "w-full mt-2 border-none focus:outline-none rounded-[6px] h-[100px] resize-none py-2 placeholder:text-lg text-lg placeholder:text-[#65676b]"
                  : inputData.length > 200
                  ? "w-full mt-2 border-none focus:outline-none rounded-[6px] h-[130px] resize-nones py-2 placeholder:text-lg text-lg placeholder:text-[#65676b]"
                  : "w-full mt-2 border-none focus:outline-none rounded-[6px] h-[130px] resize-none py-2 placeholder:text-[23px] text-2xl placeholder:text-[#65676b]"
              }
            />
          )}

          <PostStylingOption
            inputRef={inputRef}
            inputData={inputData}
            setInputData={setInputData}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            mediaUploaderShow={mediaUploaderShow}
            setselectedBackgroundInfo={setselectedBackgroundInfo}
          />

          <MediaUploader
            show={mediaUploaderShow}
            setShow={setMediaUploaderShow}
            postImages={postImages}
            setPostImages={setPostImages}
          />
        </div>

        <PostCustomizationOption
          onMediaClick={() => setMediaUploaderShow(!mediaUploaderShow)}
          mediaUploaderShow={mediaUploaderShow}
          selectedOption={selectedOption}
          selectedBackgroundInfo={selectedBackgroundInfo}
        />

        <button
          className={
            inputData
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
