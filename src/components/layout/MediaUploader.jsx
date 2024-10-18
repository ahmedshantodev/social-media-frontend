import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiImageAddFill } from "react-icons/ri";

const MediaUploader = ({ show, setShow, postImages, setPostImages }) => {
  const handleImageSelect = (e) => {
    let file = Array.from(e.target.files);

    file.forEach((image) => {
      if (
        image.type == "image/jpeg" ||
        image.type == "image/png" ||
        image.type == "image/webp" ||
        image.type == "image/gif"
      ) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (readerImage) => {
          setPostImages((prev) => [...prev, readerImage.target.result]);
        };
      }
    });
  };

  const mediaUploaderPartClose = () => {
    setPostImages([]);
    setShow(false);
  };

  return postImages.length >= 1 ? (
    <div
      className={
        "w-full border border-primary-border p-2.5 rounded-[16px] mb-2 mt-2 relative"
      }
    >
      <label
        htmlFor="add-more-photos"
        className="bg-white absolute top-5 left-5 z-10 px-5 py-2 rounded-[8px] flex items-center gap-x-2.5 border border-primary-border cursor-pointer"
      >
        <RiImageAddFill className="text-[21px] text-secondary-text" />
        <p className="text-[17px] text-secondary-text font-segoe-ui font-medium">
          Add more photos
        </p>

        <input
          id="add-more-photos"
          type="file"
          multiple
          onChange={handleImageSelect}
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
        />
      </label>

      <button
        onClick={mediaUploaderPartClose}
        className={
          "box-content bg-white p-[6px] rounded-full absolute top-4 right-4 z-10 border border-primary-border hover:bg-tertiary-bg"
        }
      >
        <RxCross2 className="text-xl" />
      </button>

      {postImages.length <= 4 ? (
        <div
          className={
            postImages.length === 1
              ? "w-full overflow-hidden rounded-[8px]"
              : postImages.length === 2
              ? "w-full overflow-hidden rounded-[8px] flex gap-x-1"
              : postImages.length === 3
              ? "w-full overflow-hidden rounded-[8px] flex gap-x-1"
              : postImages.length === 4
              ? "w-full overflow-hidden rounded-[8px] flex gap-1 flex-wrap"
              : postImages.length > 4 &&
                "w-full overflow-hidden rounded-[8px] flex gap-1 flex-wrap"
          }
        >
          {postImages.map(
            (item, index) =>
              index <= 3 && (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className={
                    postImages.length === 1
                      ? "w-full object-cover border"
                      : postImages.length === 2
                      ? "w-1/2 aspect-square object-cover"
                      : postImages.length === 3
                      ? "w-1/3 aspect-square object-cove"
                      : postImages.length === 4
                      ? "w-[49.5%] aspect-square object-cover"
                      : "w-[49.5%] aspect-square object-cover"
                  }
                />
              )
          )}
        </div>
      ) : (
        <div className="w-full overflow-hidden rounded-[8px] flex gap-1 flex-wrap">
          {postImages.map((item, index) =>
            index < 3 ? (
              <img
                key={index}
                src={item}
                alt=""
                className={
                  postImages.length === 1
                    ? "w-full object-cover border"
                    : postImages.length === 2
                    ? "w-1/2 aspect-square object-cover"
                    : postImages.length === 3
                    ? "w-1/3 aspect-square object-cove"
                    : postImages.length === 4
                    ? "w-[49.5%] aspect-square object-cover"
                    : "w-[49.5%] aspect-square object-cover"
                }
              />
            ) : (
              index == 3 && (
                <div className="w-[49.5%] relative">
                  <img
                    key={index}
                    src={item}
                    alt=""
                    className="w-full aspect-square object-cover"
                  />

                  <div className="w-full h-full bg-gray-600/50 absolute top-0 left-0 flex items-center justify-center">
                    <p className="text-4xl font-semibold text-white font-segoe-ui">
                      +{postImages.length - 4}
                    </p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      )}
    </div>
  ) : (
    <div
      className={
        show
          ? "mt-2 w-full h-[270px] visible opacity-100 border border-primary-border p-2.5 rounded-[16px] transition-all duration-150 ease-in-out"
          : "mt-2 w-full h-0 invisible hidden opacity-0 border border-primary-border p-0 rounded-[16px] transition-all duration-150 ease-in-out"
      }
    >
      <div className="relative w-full h-full">
        <button
          onClick={() => setShow(false)}
          className="box-content bg-white p-[6px] rounded-full absolute top-3 right-3 border border-primary-border hover:bg-tertiary-bg"
        >
          <RxCross2 className="text-xl" />
        </button>

        <label
          htmlFor="postMedia"
          className="w-full h-full bg-secondary-bg rounded-[6px] flex items-center justify-center text-center cursor-pointer hover:bg-tertiary-bg"
        >
          <div>
            <RiImageAddFill className="text-3xl text-secondary-text mx-auto mb-1" />

            <p className="text-[19px] font-medium text-primary-text font-segoe-ui">
              Add Photos/Videos
            </p>
            <p className="text-[14px] text-secondary-text font-segoe-ui">
              Or drag and drop
            </p>
          </div>

          <input
            id="postMedia"
            type="file"
            multiple
            onChange={handleImageSelect}
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default MediaUploader;
