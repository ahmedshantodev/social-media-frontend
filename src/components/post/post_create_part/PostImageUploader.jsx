import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiImageAddFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import fileDropIcon from "/images/file-drop-icon.png";
import { useDropzone } from "react-dropzone";

const PostImageUploader = ({ show, setShow, postImages, setPostImages }) => {
  const handleImageSelect = (e) => {
    const file = Array.from(e.target.files);

    file.forEach((image) => {
      if (
        image.type == "image/jpeg" ||
        image.type == "image/png" ||
        image.type == "image/webp" ||
        image.type == "image/gif"
      ) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (readerImage) => {
          setPostImages((prev) => [...prev, readerImage.target.result]);
        };
      }
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles;

    const acceptedFormats = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    file.forEach((image) => {
      if (acceptedFormats.includes(image.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (readerImage) => {
          setPostImages((prev) => [...prev, readerImage.target.result]);
        };
      } else {
        alert("Please upload only JPEG, PNG, WEBP or gif image file");
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg,image/png,image/webp,image/gif",
    multiple: true,
    onDrop,
  });

  let mediaUploaderPartClose = () => {
    setPostImages([]);
    setShow(false);
  };

  return postImages.length >= 1 ? (
    <div
      className={
        "w-full border border-primary-border p-2.5 rounded-[6px] mb-2 mt-2 relative"
      }
    >
      <div className="absolute top-4 left-4 z-10 flex items-center gap-x-3">
        <button className="bg-white pl-3 pr-4 py-2 rounded-[8px] flex items-center gap-x-2 border border-primary-border cursor-pointer transition-all active:scale-[0.98]">
          <MdEdit className="text-[21px] text-secondary-text" />
          <p className="text-[17px] text-secondary-text font-segoe-ui font-medium">
            Edit
          </p>
        </button>

        <label
          htmlFor="add-more-photos"
          className="bg-white px-3 py-2 rounded-[8px] flex items-center gap-x-2.5 border border-primary-border cursor-pointer  transition-all active:scale-[0.98]"
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
      </div>

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
          ? "block relative mt-2 w-full h-[260px]"
          : "hidden relative mt-2 w-full h-[260px]"
      }
    >
      <button
        onClick={() => setShow(false)}
        className="box-content bg-white p-[5px] rounded-full absolute top-4 right-4 border border-primary-border hover:bg-tertiary-bg"
      >
        <RxCross2 className="text-xl" />
      </button>

      <div
        {...getRootProps()}
        className="w-full h-full border border-primary-border p-2.5 rounded-[6px]"
      >
        <input {...getInputProps()} />

        <div className="min-w-[500px] h-full bg-secondary-bg rounded-[6px] flex items-center justify-center text-center cursor-pointer hover:bg-tertiary-bg">
          {isDragActive ? (
            <div className="">
              <img
                src={fileDropIcon}
                alt=""
                className="w-[150px] object-cover"
              />

              <p className="mt-2">Drop the files here</p>
            </div>
          ) : (
            <div>
              <RiImageAddFill className="text-3xl text-secondary-text mx-auto mb-1" />
              <p className="text-[19px] font-medium text-primary-text font-segoe-ui">
                Choose profile picture
              </p>
              <p className="text-[14px] text-secondary-text font-segoe-ui">
                Or drag and drop
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostImageUploader;
