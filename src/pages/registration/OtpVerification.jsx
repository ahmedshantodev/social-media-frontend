import React, { useEffect, useRef, useState } from "react";

let currentOtpIndex = 0;
const OtpVerification = ({ info, setInfo, error, setError, handleRegistration }) => {
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const [isResend, setIsResend] = useState(false);

  const handleStart = () => {
    setTimer(60);
    setIsRunning(true);
    setIsResend(true);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(intervalId);
            setIsResend(false);
            setIsRunning(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const inputRef = useRef(null);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    setOtp(newOtp);
    setInfo((prev) => ({
      ...prev,
      otp: newOtp.join(""),
    }));

    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
    }
  };

  const handleOnKeyDown = (e, index) => {
    currentOtpIndex = index;

    if (e.key == "Backspace") {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    return setError({
      ...error,
      otp: "",
    });
  }, [info.otp]);

  const handleVerify = () => {
    if (info.otp === "" || info.otp.length !== 6) {
      return setError({
        ...error,
        otp: "please enter your otp",
      });
    }

    handleRegistration()
  };

  return (
    <div className={"w-full pl-3"}>
      <p className={"text-3xl font-inter font-medium text-primary-text mb-2"}>
        OTP verification
      </p>

      <p className="font-poppins text-secondary-text mb-5">
        To verify your account, We've sent a 6-digit OTP to your email address{" "}
        <span className="font-medium text-black">{info.email}</span>, Please
        enter this code to complete the verification process. This code will
        expire in 10 minutes.
      </p>

      <div className="relative w-full flex gap-x-4 justify-betweens items-center mb-10">
        {otp.map((item, index) => (
          <input
            key={index}
            type="number"
            value={otp[index]}
            onChange={handleOnChange}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            ref={index === activeOtpIndex ? inputRef : null}
            className={
              error.otp
                ? "w-[60px] aspect-square spin-button-none rounded-[10px] text-xl text-center border-2 border-red-400 font-inter focus:outline-[4px] focus:outline-red-400"
                : "w-[60px] aspect-square spin-button-none rounded-[10px] text-xl text-center border-2 border-[#a8c7fa] font-inter focus:outline-[4px] focus:outline-[#a8c7fa]"
            }
          />
        ))}

        {error.otp && (
          <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
            {error.otp}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        {isResend ? (
          <p className="group inline-block font-poppins text-[15px] tracking-[0.0020rem] cursor-pointer">
            wait {timer} seconds to resend the code.
          </p>
        ) : (
          <p
            onClick={handleStart}
            className="group inline-block font-poppins text-[15px] tracking-[0.0020rem] cursor-pointer"
          >
            Didn't get the code?{" "}
            <span className="text-[#097b09] font-medium group-hover:underline">
              Click to resend
            </span>
          </p>
        )}

        <button
          onClick={handleVerify}
          className="bg-[#097b09] text-white px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#097b09] active:scale-[0.97] transition-all duration-200 ease-in-out"
        >
          Verify and proceed
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
