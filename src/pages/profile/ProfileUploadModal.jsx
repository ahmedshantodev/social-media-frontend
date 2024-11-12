import React, { useRef, useState, useCallback } from "react";
import Modal from "../../components/modal/Modal";
import AutoResizeTextarea from "../../components/post/AutoResizeTextarea";
import SecondaryButton from "../../components/layout/SecondaryButton";
import ProfileCropper from "./ProfileCropper";
import { useDropzone } from "react-dropzone";
import { RiImageAddFill } from "react-icons/ri";
import fileDropIcon from "/images/file-drop-icon.png";

const ProfileUploadModal = ({ show, setShow, user, data }) => {
  const descriptionRef = useRef();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [isSeeMore, setIsSeeMore] = useState(false);

  const allProfilePicture = data?.images?.resources?.filter((item) => {
    return item.asset_folder === `user-image/${user?.username}/profile-picture`;
  });

  // console.log(allProfilePicture);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const acceptedFormats = ["image/jpeg", "image/png", "image/webp"];

    if (acceptedFiles.length == 1 && acceptedFormats.includes(file.type)) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerImage) => {
        setImage(readerImage.target.result);
      };
    } else {
      alert("Please upload only one JPEG, PNG, or WEBP image file");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg,image/png,image/webp",
    multiple: false,
    onDrop,
  });

  return (
    <Modal show={show} setShow={setShow} className={`py-5 max-h-[765px]`}>
      <p className="text-center text-xl text-primary-text font-inter font-semibold border-b border-primary-border/80 pb-3">
        Upload profile picture
      </p>

      {image ? (
        <div className="w-[750px] mt-6 px-8">
          <AutoResizeTextarea
            row={1}
            placeholder={"Description"}
            textareaRef={descriptionRef}
            onChange={(e) => setText(e.target.value)}
            className={`w-full min-h-[110px] px-5 py-3 border border-primary-border rounded-lg resize-none outline-none placeholder:text-[#65686c] text-lg font-inter hover:border hover:border-gray-500`}
          />

          <ProfileCropper
            user={user}
            text={text}
            setText={setText}
            image={image}
            setImage={setImage}
            setShow={setShow}
          />
        </div>
      ) : (
        <div className="px-6 pt-5">
          <div
            {...getRootProps()}
            className="w-full h-[250px] border border-primary-border p-2.5 rounded-[6px]"
          >
            <input {...getInputProps()} />

            <div className="w-full h-full bg-secondary-bg rounded-[6px] flex items-center justify-center text-center cursor-pointer hover:bg-tertiary-bg">
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

          <div className="mt-4 w-[600px]">
            <div className="flex justify-between items-center">
              <p className="font-inter text-xl font-medium">Suggested Photos</p>
              
              {allProfilePicture?.length >= 4 && (
                <button
                  onClick={() => setIsSeeMore(!isSeeMore)}
                  className="font-inter text-lg text-primary-button hover:underline mr-1"
                >
                  {isSeeMore ? "see less" : "see more"}
                </button>
              )}
            </div>

            <div className="w-full max-h-[300px] overflow-y-auto flex items-start flex-wrap gap-[6px] mt-2 overflow-hidden">
              {allProfilePicture?.slice(0 , isSeeMore ? allProfilePicture?.length : 4).map((item, index) => (
                <div
                  onClick={() => setImage(item.secure_url)}
                  className="w-[24%] aspect-square cursor-pointer"
                >
                  <img
                    src={item.secure_url}
                    alt={item.asset_id}
                    className="w-full h-full object-cover rounded-md border border-primary-border/80"
                  />
                </div>
              ))}              
            </div>
          </div>

          <SecondaryButton
            onClick={() => setShow(false)}
            className={`w-full mt-4`}
          >
            Cancel
          </SecondaryButton>
        </div>
      )}
    </Modal>
  );
};

export default ProfileUploadModal;
