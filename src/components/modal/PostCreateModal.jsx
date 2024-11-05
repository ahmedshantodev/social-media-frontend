import React, { useEffect, useRef, useState } from "react";
// react icons
import { RxCross2 } from "react-icons/rx";
// redux rtq
import { useCreatePostMutation } from "../../redux/api/postApi";
// react components
import Modal from "./Modal";
import PostCreateEditorPart from "../layout/PostCreateEditorPart";
import PostCreateFeelingsPart from "../layout/PostCreateFeelingsPart";
import PostImageUploader from "../layout/PostImageUploader";
import PostCreateBackgroundPart from "../layout/PostCreateBackgroundPart";
import PostCustomizationOption from "../layout/PostCustomizationOption";
import PostCreateGifPart from "../layout/PostCreateGifPart";
import { useSelector } from "react-redux";
// npm package
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import AutoResizeTextarea from "../post/AutoResizeTextarea";

const PostCreateModal = ({ show, setShow }) => {
  // useRef
  const backgroundTextareaRef = useRef(null);
  const scrollRef = useRef();

  // active user information
  const user = useSelector((activeUser) => activeUser.user.information);

  // post information
  const [text, setText] = useState("");
  const [backgroundInfo, setBackgroundInfo] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [feelings, setFeelings] = useState("");
  const [gif, setGif] = useState("");

  // state
  const [isImageUploaderShow, setIsImageUploaderShow] = useState(false);
  const [isBackgroundShow, setIsBackgroundShow] = useState(false);
  const [isFeelingSelectorShow, setIsFeelingSelectorShow] = useState(false);
  const [isGifShow, setIsGifShow] = useState(false);

  // api call
  const [createPost, { isLoading }] = useCreatePostMutation();

  // post create function
  const handlePost = async () => {
    let response = await createPost({
      text: text,
      background: backgroundInfo,
      images: postImages,
      feelings: feelings,
      gif: gif,
      user: user.id,
    });

    if (response?.data.message) {
      toast.success(response?.data.message, {
        autoClose: 2500,
        position: "bottom-left",
        hideProgressBar: true,
      });

      setText("");
      setBackgroundInfo("");
      setPostImages("");
      setFeelings("");
      setGif("");

      setShow(false);
    }
  };

  // scroll Into View function
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isImageUploaderShow, isBackgroundShow, isFeelingSelectorShow, isGifShow]);

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
              src={user?.profilePicture}
              alt=""
              className="w-[45px] aspect-square rounded-full border border-primary-border"
            />
          </div>

          <p className="font-segoe-ui text-[19px] text-primary-text font-semibold">
            {user?.firstName} {user?.lastName}
          </p>
        </div>

        <div className="w-full max-h-[480px] overflow-y-auto mt-1 mb-2 pr-1">
          {backgroundInfo != "" ? (
            <div
              className="mt-3 rounded-md w-full h-[390px] relative mb-2"
              style={{
                background: `url(${backgroundInfo.background})`,
              }}
            >
              <AutoResizeTextarea
                value={text}
                textareaRef={backgroundTextareaRef}
                maxlength={"140"}
                row={"1"}
                style={{ color: backgroundInfo.textColor }}
                onChange={(e) => setText(e.target.value)}
                placeholder={`What's on your mind, Monsur?`}
                className={` absolute top-2/4 -translate-y-2/4 left-0 resize-none w-full max-h-full text-center outline-none bg-transparent px-7s text-3xl font-semibold leading-[45px] text-white placeholder:text-white`}
              />
            </div>
          ) : (
            <PostCreateEditorPart user={user} text={text} setText={setText} />
          )}

          {isGifShow && (
            <PostCreateGifPart
              gif={gif}
              setGif={setGif}
              isGifShow={isGifShow}
              setIsGifShow={setIsGifShow}
            />
          )}

          {isBackgroundShow && (
            <PostCreateBackgroundPart
              inputRef={backgroundTextareaRef}
              setbackgroundInfo={setBackgroundInfo}
              setIsBackgroundShow={setIsBackgroundShow}
            />
          )}

          {isImageUploaderShow && (
            <PostImageUploader
              show={isImageUploaderShow}
              setShow={setIsImageUploaderShow}
              postImages={postImages}
              setPostImages={setPostImages}
            />
          )}

          {isFeelingSelectorShow && (
            <PostCreateFeelingsPart
              setFeelings={setFeelings}
              setFeelingSelectorShow={setIsFeelingSelectorShow}
            />
          )}

          <div ref={scrollRef} />
        </div>

        <PostCustomizationOption
          gif={gif}
          setGif={setGif}
          isGifShow={isGifShow}
          setIsGifShow={setIsGifShow}
          postImages={postImages}
          setPostImages={setPostImages}
          backgroundInfo={backgroundInfo}
          setBackgroundInfo={setBackgroundInfo}
          isBackgroundShow={isBackgroundShow}
          setIsBackgroundShow={setIsBackgroundShow}
          isImageUploaderShow={isImageUploaderShow}
          setIsImageUploaderShow={setIsImageUploaderShow}
          feelingSelectorShow={isFeelingSelectorShow}
          setFeelingSelectorShow={setIsFeelingSelectorShow}
        />

        <div className="pr-1">
          {isLoading ? (
            <button
              className={
                "w-full mt-3 rounded-[6px] py-2.5 bg-tertiary-bg text-lg font-segoe-ui font-medium text-white cursor-not-allowed"
              }
            >
              <BeatLoader size={10} />
            </button>
          ) : (
            <button
              onClick={handlePost}
              className={
                "w-full mt-3 rounded-[6px] py-2.5 bg-primary-button text-white text-lg font-segoe-ui font-medium"
              }
            >
              Post
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PostCreateModal;
