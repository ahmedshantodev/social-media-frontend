import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { RxCross2 } from "react-icons/rx";
import PostCustomizationOption from "../layout/PostCustomizationOption";
import PostStylingOption from "../layout/PostStylingOption";
import MediaUploader from "../layout/MediaUploader";
import { feelings } from "../../data/feelings";
import userImage from "/public/remove/shanto.jpg";

const PostCreateModal = ({ show, setShow }) => {
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState("");
  const [selectedBackgroundInfo, setselectedBackgroundInfo] = useState("");
  const [mediaUploaderShow, setMediaUploaderShow] = useState(false);
  const [feelingSelectorShow, setFeelingSelectorShow] = useState(false);
  const [postImages, setPostImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFeelingSelect = (item) => {};

  return (
    <Modal
      show={show}
      setShow={setShow}
      className={`w-[570px] max-h-[85%] py-5 relative`}
    >
      <p className="text-center text-primary-text font-segoe-ui font-semibold text-[19px] border-b-2 border-primary-border pb-3">
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
              src={userImage}
              alt=""
              className="w-[45px] aspect-square rounded-full border border-primary-border"
            />
          </div>

          <p className="font-segoe-ui text-[19px] text-primary-text font-semibold">
            Monsur Ahmed Shanto
          </p>
        </div>

        <div className="w-full max-h-[480px] overflow-y-auto px-2 mt-1 mb-2">
          {selectedBackgroundInfo != "" ? (
            <div className="mt-2 w-full h-[390px] relative mb-2">
              <textarea
                style={{ color: `${selectedBackgroundInfo.textColor}` }}
                name="post"
                id="post"
                ref={inputRef}
                value={inputData}
                placeholder="What's on your mind, Monsur?"
                onChange={(e) => setInputData(e.target.value)}
                className={`w-full h-full absolute top-0 left-0 z-10 bg-transparent border-none focus:outline-none rounded-[6px] resize-none py-2 placeholder:font-segoe-ui placeholder:text-[30px] placeholder:font-semibold font-semibold text-3xl placeholder:text-white placeholder:leading-[42px] leading-[42px]`}
              />

              {/* <div className="w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center text-center px-5">
                <p
                  contentEditable="true"
                  className="text-3xl text-white outline-none w-full"
                >
                  What's on your mind, Monsur?
                </p>
              </div> */}

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
                  ? "w-full border-none focus:outline-none rounded-[6px] h-[100px] resize-none py-2 font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg text-lg placeholder:text-[#65676b]"
                  : inputData.length > 200
                  ? "w-full border-none focus:outline-none rounded-[6px] h-[130px] resize-nones py-2 font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg text-lg placeholder:text-[#65676b]"
                  : "w-full border-none focus:outline-none rounded-[6px] h-[130px] resize-none py-2 font-segoe-ui placeholder:font-segoe-ui placeholder:text-[24px] text-2xl placeholder:text-[#65676b]"
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

          {feelingSelectorShow && (
            <div className="w-full h- border border-primary-border rounded-[6px] px-3 py-2 mt-2">
              <h2 className="text-[18px] font-segoe-ui font-medium text-secondary-text mb-2">
                Feelings:
              </h2>

              <div className="flex justify-between flex-wrap gap-[6px]">
                {feelings.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleFeelingSelect(item)}
                    className="bg-gray-100 hover:bg-secondary-bg w-[32.5%] px-2 py-2 rounded-[6px] flex items-center gap-x-2 cursor-pointer"
                  >
                    <p className="text-2xl bg-[#e4e6eb] p-1 rounded-full">
                      {item.emoji}
                    </p>
                    <p className="text-[18px] font-segoe-ui font-light">
                      {item.feeling}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <PostCustomizationOption
          onMediaClick={() => setMediaUploaderShow(!mediaUploaderShow)}
          mediaUploaderShow={mediaUploaderShow}
          selectedOption={selectedOption}
          selectedBackgroundInfo={selectedBackgroundInfo}
          feelingSelectorShow={feelingSelectorShow}
          setFeelingSelectorShow={setFeelingSelectorShow}
        />

        <button
          className={
            inputData
              ? "w-full mt-3 rounded-[6px] py-2.5 bg-primary-button text-lg font-segoe-ui font-medium text-white cursor-pointer"
              : "w-full mt-3 rounded-[6px] py-2.5 bg-tertiary-bg text-lg font-segoe-ui font-medium text-secondary-text cursor-not-allowed"
          }
        >
          Next
        </button>
      </div>
    </Modal>
  );
};

export default PostCreateModal;
