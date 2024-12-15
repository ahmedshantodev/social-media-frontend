import React, { useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import getCroppedImg from "../../../functions/getCroppedImage";
import SecondaryButton from "../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../components/layout/PrimaryButton";
import { useUpdateProfilePictureMutation } from "../../../redux/api/userApi";
import { activeUser } from "../../../redux/slices/activeUserSlice";

const ProfileCropper = ({ user, text, setText, image, setImage, setShow }) => {
  const zoomBarRef = useRef();
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [updateProfilePicture, { isLoading }] = useUpdateProfilePictureMutation();
  const [loading, setLoading] = useState(false);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleZoomOut = () => {
    zoomBarRef?.current.stepDown();
    setZoom(zoomBarRef?.current.value);
  };

  const handleZoomIn = () => {
    zoomBarRef?.current.stepUp();
    setZoom(zoomBarRef?.current.value);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      const response = await updateProfilePicture({
        text: text,
        profilePicture: croppedImage,
        username: user?.username,
      });

      if (response?.error?.data?.message) {
        return setLoading(false);
      }

      if (response?.data?.message) {
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify({ ...user, profilePicture: response?.data?.url[0] }));
          dispatch(activeUser({ ...user, profilePicture: response?.data?.url[0] }));

          setLoading(false);
          toast.success(response?.data.message, {
            autoClose: 2500,
            position: "bottom-left",
            hideProgressBar: true,
          });

          setCrop({ x: 0, y: 0 });
          setZoom(1);
          setCroppedAreaPixels(null);
          setText("");
          setImage("");
          setShow(false);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        id="profile-cropper"
        className="flex items-center justify-center relative w-full h-[350px] mt-6 translate-x-0"
      >
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          cropShape="round"
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>

      <div className="flex items-center justify-center gap-x-2 mt-4">
        {zoom === "1" ? (
          <button
            className={
              "text-xl p-2 box-content rounded-full cursor-not-allowed opacity-[0.5]"
            }
          >
            <LuMinus />
          </button>
        ) : (
          <button
            onClick={handleZoomOut}
            className={
              "text-xl hover:bg-[#f2f2f2] p-2 box-content rounded-full"
            }
          >
            <LuMinus />
          </button>
        )}

        <input
          min={1}
          max={3}
          step={0.1}
          type="range"
          value={zoom}
          ref={zoomBarRef}
          className="w-[400px] custom-range outline-none"
          onChange={(e) => setZoom(e.target.value)}
        />

        {zoom === "3" ? (
          <button
            className={
              "text-xl p-2 box-content rounded-full cursor-not-allowed opacity-[0.5]"
            }
          >
            <FiPlus />
          </button>
        ) : (
          <button
            onClick={handleZoomIn}
            className="text-xl hover:bg-[#f2f2f2] p-2 box-content rounded-full"
          >
            <FiPlus />
          </button>
        )}
      </div>

      <div className="flex gap-x-2.5 mt-7">
        {loading || isLoading ? (
          <SecondaryButton
            className={`w-1/2 h-[50px] cursor-not-allowed opacity-70 hover:bg-[#e2e5e9]`}
          >
            Cancel
          </SecondaryButton>
        ) : (
          <SecondaryButton
            onClick={() => setImage("")}
            className={`w-1/2 h-[50px]`}
          >
            Cancel
          </SecondaryButton>
        )}

        {loading || isLoading ? (
          <PrimaryButton
            className={
              "w-1/2 h-[50px] !py-0 flex items-center justify-center !cursor-not-allowed hover:bg-primary-button"
            }
          >
            <ColorRing
              visible={true}
              height="45"
              width="45"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            />
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={handleUpload} className={"w-1/2 h-[50px]"}>
            Save
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default ProfileCropper;
