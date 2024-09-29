import React, { useRef } from "react";
import OutSideClick from "../../functions/click";

const Modal = ({ show, setShow, children, className }) => {
  const modalRef = useRef();

  OutSideClick(modalRef, () => {
    setShow(false);
  });

  return (
    <div
      className={
        show
          ? "w-full h-dvh fixed top-0 left-0 z-[999] bg-gray-200/55 flex items-center justify-center overflow-y-auto"
          : "w-full h-dvh fixed top-0 left-0 z-[999] bg-gray-200/55 hidden items-center justify-center overflow-y-auto"
      }
    >
      <div
        ref={modalRef}
        className={
          show
            ? `${className} bg-white rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]`
            : `${className} bg-white rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
