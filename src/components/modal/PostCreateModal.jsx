import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { RxCross2 } from "react-icons/rx";
import PostCustomizationOption from "../layout/PostCustomizationOption";
import userImage from "/public/remove/shanto.jpg";
import { usePostCreateMutation } from "../../redux/api/authenticationApi";
import PostEditorPart from "../../pages/feeds/PostEditorPart";
import FeelingsPart from "../../pages/feeds/FeelingsPart";
import MediaUploader from "../layout/MediaUploader";
import BackgroundPart from "../../pages/feeds/BackgroundPart";

const PostCreateModal = ({ show, setShow }) => {
  // useRef
  const scrollToViewRef = useRef();

  // post information
  const [text, setText] = useState("");
  const [backgroundInfo, setBackgroundInfo] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [feelings, setFeelings] = useState("");

  // state
  const [isImageUploaderShow, setIsImageUploaderShow] = useState(false);
  const [isBackgroundShow, setIsBackgroundShow] = useState(false);
  const [isFeelingSelectorShow, setIsFeelingSelectorShow] = useState(false);

  // api call
  const [postCreate, { isLoading }] = usePostCreateMutation();

  // post create function
  const handlePost = async () => {
    let response = await postCreate({
      text: text,
      background: backgroundInfo,
      images: postImages,
      feelings: feelings,
    });
  };

  // scroll Into View function
  useEffect(() => {
    scrollToViewRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isImageUploaderShow, isBackgroundShow, isFeelingSelectorShow]);

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

        <div className="w-full max-h-[480px] overflow-y-auto mt-1 mb-2">
          {backgroundInfo != "" ? (
            <div className="mr-1">
              <div
                className="mt-3 rounded-md w-full h-[390px] relative mb-2 flex items-center justify-center text-center"
                style={{
                  background: `url(${backgroundInfo.background})`,
                }}
              >
                <textarea
                  type="text"
                  autoFocus={true}
                  style={{ color: backgroundInfo.textColor }}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What's on your mind, Monsur?"
                  className="w-full h-full text-center bg-transparent outline-none resize-none text-3xl font-semibold leading-[45px] text-white placeholder:text-white"
                />
              </div>
            </div>
          ) : (
            <PostEditorPart text={text} setText={setText} />
          )}

          {isBackgroundShow && (
            <BackgroundPart
              setIsBackgroundShow={setIsBackgroundShow}
              backgroundInfo={backgroundInfo}
              setbackgroundInfo={setBackgroundInfo}
            />
          )}

          {isImageUploaderShow && (
            <MediaUploader
              show={isImageUploaderShow}
              setShow={setIsImageUploaderShow}
              postImages={postImages}
              setPostImages={setPostImages}
            />
          )}

          {isFeelingSelectorShow && (
            <FeelingsPart
              setFeelings={setFeelings}
              setFeelingSelectorShow={setIsFeelingSelectorShow}
            />
          )}

          <div ref={scrollToViewRef} />
        </div>

        <PostCustomizationOption
          isBackgroundShow={isBackgroundShow}
          setIsBackgroundShow={setIsBackgroundShow}
          isImageUploaderShow={isImageUploaderShow}
          setIsImageUploaderShow={setIsImageUploaderShow}
          selectedBackgroundInfo={backgroundInfo}
          feelingSelectorShow={isFeelingSelectorShow}
          setFeelingSelectorShow={setIsFeelingSelectorShow}
        />

        {text || isLoading ? (
          <button
            className={
              "w-full mt-3 rounded-[6px] py-2.5 bg-primary-button text-lg font-segoe-ui font-medium text-white cursor-pointer"
            }
          >
            Next
          </button>
        ) : (
          <button
            onClick={handlePost}
            className={
              "w-full mt-3 rounded-[6px] py-2.5 bg-tertiary-bg text-lg font-segoe-ui font-medium text-secondary-text cursor-not-allowed"
            }
          >
            Next
          </button>
        )}
      </div>
    </Modal>
  );
};

export default PostCreateModal;
