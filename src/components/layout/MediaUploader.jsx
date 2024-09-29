import React from "react";
import { RxCross2 } from "react-icons/rx";

const MediaUploader = ({ show, setShow }) => {
  return (
    <div
      className={
        show
          ? "w-full h-[250px] visible opacity-100 border border-primary-border p-2.5 rounded-[16px] transition-all duration-150 ease-in-out"
          : "w-full h-0 invisible opacity-0 border border-primary-border p-2.5 rounded-[16px] transition-all duration-150 ease-in-out"
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
            <p className="text-xl font-medium text-primary-text font-poppins">
              Add Photos/Videos
            </p>
            <p className="text-sm text-secondary-text font-poppins">
              Or drag and drop
            </p>
          </div>
        </label>

        <input
          id="postMedia"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default MediaUploader;
