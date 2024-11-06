import React, { useState } from "react";
import { useVerifyPasswordResetOtpMutation } from "../../redux/api/authenticationApi";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";

const OtpSubmit = ({ setActiveItem, foundUserInfo }) => {
  const [loading, setLoading] = useState(false);
  const [verifyPasswordResetOtp, { isLoading }] = useVerifyPasswordResetOtpMutation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError("");
  };

  const handleContinue = async () => {
    try {
      if (otp === "") {
        return setError("Please enter your 6 digit otp");
      }

      const response = await verifyPasswordResetOtp({
        email: foundUserInfo.email,
        code: otp,
      });

      if (response.error?.data?.message) {
        return setError(response.error?.data?.message);
      }

      if (response.data) {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setActiveItem(3);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"w-[600px] bg-white py-[30px] px-[50px] rounded-[10px]"}>
      <h4 className="font-poppins text-[30px] font-semibold mb-2.5">
        User verification
      </h4>

      <p className="font-poppins text-[16px] text-secondary-text mb-[18px]">
        A security code has been sent to your email address{" "}
        <span className="font-medium text-black">{foundUserInfo.email}</span> .
        This 6-digit code is required to access your account. Please check your
        email for the code.
      </p>

      <label
        htmlFor="otp"
        className="font-poppins font-medium text-[20px] block mb-[5px]"
      >
        Enter otp
      </label>

      <div className="relative mb-8">
        <input
          name={"otp"}
          id={"otp"}
          maxLength={"6"}
          type={"number"}
          autoFocus={true}
          onChange={handleChange}
          placeholder={"Enter 6 digit verification code"}
          className={
            error
              ? "w-full border-2 border-red-400 px-5 rounded-md outline-none py-[15px] spin-button-none"
              : "w-full border-2 border-primary-border px-5 rounded-md outline-none py-[15px] spin-button-none"
          }
        />

        {error && (
          <p className="font-poppins text-red-500 text-base absolute top-full left-0">
            {error}
          </p>
        )}
      </div>

      <div className="flex justify-between gap-x-3">
        {isLoading || loading ? (
          <button
            className={
              "rounded-md w-[50%] py-3 capitalize text-[16px] bg-[#dddcea] text-secondary-text font-semibold text-center cursor-not-allowed"
            }
          >
            Cancel
          </button>
        ) : (
          <Link
            to={"/login"}
            className={
              "rounded-md text-center w-[50%] py-3 capitalize text-[16px] bg-[#dddcea] text-black font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
            }
          >
            Cancel
          </Link>
        )}

        {isLoading || loading ? (
          <button className="rounded-md w-[50%] flex items-center justify-center capitalize text-[16px] bg-[#1877f2] text-white font-semibold cursor-not-allowed">
            <ColorRing
              visible={true}
              height="45"
              width="45"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            />
          </button>
        ) : (
          <button
            onClick={handleContinue}
            className={
              "rounded-md w-[50%] py-3 capitalize text-[16px] bg-[#1877f2] text-white font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
            }
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpSubmit;
