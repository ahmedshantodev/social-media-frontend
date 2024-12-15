import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
import { MdOutlineFileUpload } from "react-icons/md";
import { LuImage } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";
import OutSideClick from "../../../functions/click";
import SecondaryButton from "../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../components/layout/PrimaryButton";
import getCroppedImg from "../../../functions/getCroppedImage";
import { activeUser } from "../../../redux/slices/activeUserSlice";
import { useUpdateCoverPhotoMutation } from "../../../redux/api/userApi";
import Modal from "../../../components/layout/Modal";

const CoverPhotoPart = ({ user, profileInfo, visitor, coverPhoto, setCoverPhoto }) => {
  const dispatch = useDispatch();
  // ref
  const menuBoxRef = useRef();
  const cropperBoxRef = useRef();
  // value
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropperBoxWidth, setCropperBoxWidth] = useState("");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // api call
  const [updateCoverPhoto, { isLoading }] = useUpdateCoverPhotoMutation();
  // state
  const [loading, setLoading] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isChooseCoverModalShow, setIsChooseCoverModalShow] = useState(false);

  const allCoverPhoto = profileInfo?.images?.resources?.filter((item) => {
    return item.asset_folder === `user-image/${user?.username}/cover-photo`;
  });

  const handleCoverPhotoSelect = (e) => {
    const file = e.target.files[0];

    if (
      file.type == "image/jpeg" ||
      file.type == "image/png" ||
      file.type == "image/webp"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerImage) => {
        setCoverPhoto(readerImage.target.result);
      };
    } else {
      alert("Please upload only one JPEG, PNG, or WEBP image file");
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const croppedImage = await getCroppedImg(coverPhoto, croppedAreaPixels);
      const response = await updateCoverPhoto({
        coverPhoto: croppedImage,
        username: user?.username,
      });

      if (response?.error?.data?.message) {
        return setLoading(false);
      }

      if (response?.data?.message) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, coverPhoto: response?.data?.url[0] })
        );
        dispatch(activeUser({ ...user, coverPhoto: response?.data?.url[0] }));

        toast.success(response?.data.message, {
          autoClose: 2500,
          position: "bottom-left",
          hideProgressBar: true,
        });

        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedAreaPixels(null);
        setCoverPhoto("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  OutSideClick(menuBoxRef, () => {
    setIsMenuShow(false);
  });

  // useEffect(() => {
  //   setCropperBoxWidth(cropperBoxRef?.current?.clientWidth)
  // } , [window.innerWidth])

  return (
    <>
      {coverPhoto ? (
        <div
          ref={cropperBoxRef}
          id="cover-photo-cropper"
          className="relative h-[500px] w-full rounded-b-[12px] overflow-hidden"
        >
          <Cropper
            image={coverPhoto}
            crop={crop}
            zoom={zoom}
            aspect={1300 / 500}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            objectFit="horizontal-cover"
          />
        </div>
      ) : (
        <img
          src={coverPhoto || user?.coverPhoto}
          alt="cover photo"
          className="w-full h-full object-cover rounded-b-[12px]"
        />
      )}

      {coverPhoto && (
        <div className="absolute bottom-0 left-0 z-20 w-full bg-white/40 py-3 px-5 flex items-center justify-end gap-3">
          <SecondaryButton
            className={`!px-6 h-[45px]`}
            isLoading={loading || isLoading}
            onClick={() => setCoverPhoto("")}
          >
            cancel
          </SecondaryButton>

          {loading || isLoading ? (
            <PrimaryButton
              className={`w-[170px] h-[45px] flex items-center justify-center cursor-not-allowed`}
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
            </PrimaryButton>
          ) : (
            <PrimaryButton
              onClick={handleSave}
              className={`w-[170px] h-[45px] py-0`}
            >
              Save Changes
            </PrimaryButton>
          )}
        </div>
      )}

      {visitor && (
        <div ref={menuBoxRef} className="absolute bottom-4 right-4">
          {!coverPhoto && (
            <button
              onClick={() => setIsMenuShow(!isMenuShow)}
              className="bg-white py-2 px-4 rounded-lg flex items-center gap-x-2 text-lg font-semibold cursor-pointer"
            >
              <MdPhotoCamera className="text-[22px]" /> Edit Cover Photo
            </button>
          )}

          {isMenuShow && (
            <div
              id="profile-upload-menu"
              className="absolute top-full translate-y-1  right-0 w-[300px] bg-white px-4 py-2.5 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              <div className="border-b border-primary-border pb-1 mb-2">
                {allCoverPhoto?.length > 1 && (
                  <button
                    onClick={() => setIsChooseCoverModalShow(true)}
                    className="flex items-center gap-x-[6px] hover:bg-[#f2f2f2] px-2 py-2.5 rounded-md w-full text-start text-primary-text capitalize font-medium transition-all"
                  >
                    <LuImage className="text-xl" /> choose cover photo
                  </button>
                )}

                <label
                  htmlFor="add-cover-photo"
                  className="flex items-center gap-x-[6px] hover:bg-[#f2f2f2] px-2 py-2.5 rounded-md w-full text-start text-primary-text capitalize font-medium transition-all"
                >
                  <input
                    id="add-cover-photo"
                    type="file"
                    onChange={handleCoverPhotoSelect}
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                  />
                  <MdOutlineFileUpload className="text-xl" /> upload photo
                </label>
              </div>

              <button className="flex items-center gap-x-[6px] hover:bg-[#f2f2f2] px-2 py-2.5 rounded-md w-full text-start text-primary-text capitalize font-medium transition-all">
                <AiOutlineDelete className="text-xl" /> remove photo
              </button>
            </div>
          )}
        </div>
      )}

      <Modal
        show={isChooseCoverModalShow}
        setShow={setIsChooseCoverModalShow}
        className={`w-[800px] py-5`}
      >
        <p className="text-center text-xl text-primary-text font-inter font-semibold border-b border-primary-border/80 pb-3">
          Choose cover photo
        </p>

        <div className="px-5 pt-3">
          <div className="flex flex-wrap gap-2 max-h-[520px] overflow-y-auto">
            {allCoverPhoto?.map((item) => (
              <div
                onClick={() => {
                  setCoverPhoto(item.secure_url);
                  setIsChooseCoverModalShow(false);
                }}
                className="w-[32.5%] h-[150px] cursor-pointer"
              >
                <img
                  src={item.secure_url}
                  alt={item.asset_id}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <SecondaryButton
            onClick={() => setIsChooseCoverModalShow(false)}
            className={`w-full mt-4`}
          >
            Cancel
          </SecondaryButton>
        </div>
      </Modal>
    </>
  );
};

export default CoverPhotoPart;
