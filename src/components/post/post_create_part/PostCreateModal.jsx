import React, { useEffect, useRef, useState } from "react";
// react icons
import { RxCross2 } from "react-icons/rx";
// redux rtq
import { useCreatePostMutation } from "../../../redux/api/postApi";
// react components
import Modal from "../../layout/Modal";
import PostCreateFeelingsPart from "./PostCreateFeelingsPart";
import PostImageUploader from "./PostImageUploader";
import PostCreateBackgroundPart from "./PostCreateBackgroundPart";
import PostCustomizationOption from "./PostCustomizationOption";
import PostCreateGifPart from "./PostCreateGifPart";
import { useSelector } from "react-redux";
// npm package
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import AutoResizeTextarea from "../../layout/AutoResizeTextarea";

const PostCreateModal = ({ show, setShow }) => {
  // useRef
  const scrollRef = useRef();
  const textareaRef = useRef(null);
  const backgroundTextareaRef = useRef(null);
  // active user information
  const user = useSelector((activeUser) => activeUser.user.information);
  // post information
  const [text, setText] = useState("");
  const [backgroundInfo, setBackgroundInfo] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [feelings, setFeelings] = useState("");
  const [gif, setGif] = useState("");
  // state
  const [loading, setLoading] = useState(false);
  const [isImageUploaderShow, setIsImageUploaderShow] = useState(false);
  const [isBackgroundShow, setIsBackgroundShow] = useState(false);
  const [isFeelingSelectorShow, setIsFeelingSelectorShow] = useState(false);
  const [isGifShow, setIsGifShow] = useState(false);
  // api call
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleTextareaChange = (event) => {
    const maxLines = 5;
    const newText = event.target.value;
    const lines = newText.split("\n");

    // user can write maximum 5 line
    const truncatedText = lines.slice(0, maxLines).join("\n");
    setText(truncatedText);
  };

  // post create function
  const handlePost = async () => {
    setLoading(true);

    let response = await createPost({
      text: text,
      background: backgroundInfo,
      images: postImages,
      feelings: feelings,
      gif: gif,
      user: user.id,
    });

    console.log(response);

    if (response?.error?.data?.message) {
      return setLoading(false)
    }

    if (response?.data?.message) {
      setTimeout(() => {
        setLoading(false);
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
      }, 800);
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
              alt={user?.fullName}
              className="w-[45px] aspect-square rounded-full border"
            />
          </div>

          <p className="font-segoe-ui text-[19px] text-primary-text font-semibold">
            {user?.fullName}
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
                row={"1"}
                maxLength={"100"}
                value={text}
                onChange={handleTextareaChange}
                textareaRef={backgroundTextareaRef}
                style={{ color: backgroundInfo.textColor }}
                placeholder={`What's on your mind, ${user?.firstName}?`}
                className={` absolute top-2/4 -translate-y-2/4 left-0 px-7 resize-none w-full max-h-full text-center outline-none bg-transparent px-7s text-3xl font-semibold leading-[45px] text-white placeholder:text-white`}
              />
            </div>
          ) : (
            <AutoResizeTextarea
              row={"1"}
              value={text}
              maxLength={"5000"}
              textareaRef={textareaRef}
              onChange={(e) => setText(e.target.value)}
              placeholder={`What's on your mind, ${user?.firstName}?`}
              className={
                "w-full resize-none outline-none mt-2 text-[27px] placeholder:text-[#65686c] min-h-[160px]"
              }
            />
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
          {isLoading || loading ? (
            <button
              className={
                "w-full flex items-center justify-center mt-3 rounded-[6px] bg-primary-button cursor-not-allowed"
              }
            >
              <ColorRing
                visible={true}
                height="48"
                width="48"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
              />
            </button>
          ) : text != "" ||
            (text != "" && backgroundInfo) ||
            postImages.length >= 1 ? (
            <button
              onClick={handlePost}
              className={
                "w-full mt-3 rounded-[6px] py-2.5 bg-primary-button text-white text-lg font-segoe-ui font-medium"
              }
            >
              Post
            </button>
          ) : (
            <button
              className={
                "w-full mt-3 rounded-[6px] py-2.5 bg-[#e2e5e9] text-secondary-text/50 text-lg font-segoe-ui font-medium cursor-not-allowed"
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
