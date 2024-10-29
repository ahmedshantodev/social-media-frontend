import React, { useState } from "react";
import { useSendPasswordResetOtpMutation } from "../../redux/api/authenticationApi";
import BeatLoader from "react-spinners/BeatLoader";

const FoundAccount = ({ setActiveItem, foundUserInfo }) => {
  const [loading, setLoading] = useState(false);
  const [sendPasswordResetOtp, { isLoading }] =
    useSendPasswordResetOtpMutation();

  const handleOtpSend = async () => {
    try {
      const response = await sendPasswordResetOtp({
        email: foundUserInfo.email,
      });

      if (response.data) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setActiveItem(2);
        }, 1000);
      }
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <div className={"w-[600px] bg-white py-[30px] px-8 rounded-[10px]"}>
      <h4 className="font-poppins text-secondary-text text-[20px] font-semibold pb-2 mb-6 text-center border-b border-primary-border">
        Your account has been found
      </h4>

      <div className="flex gap-x-4 items-center mb-3">
        <img
          // src={foundUserInfo.profilePicture}
          src={
            "https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
          }
          alt=""
          className="w-[70px] aspect-square object-cover rounded-md"
        />

        <div>
          <h4 className="font-poppins text-xl font-semibold">
            {foundUserInfo.firstName} {foundUserInfo.lastName}
          </h4>

          <h4 className="font-poppins text-lgs font-medium text-secondary-text">
            {foundUserInfo.email}
          </h4>
        </div>
      </div>

      <p className="text text-secondary-text font-poppins mb-4">
        We can send a login code to:{" "}
        <span className="text-black font-medium">{foundUserInfo.email}</span>
      </p>

      <div className="flex gap-x-3">
        {isLoading || loading ? (
          <button className="w-1/2 bg-[#dddcea] rounded-md text-secondary-text font-poppins py-3 font-medium cursor-not-allowed">
            Not you?
          </button>
        ) : (
          <button
            onClick={() => setActiveItem(0)}
            className="w-1/2 bg-[#dddcea] rounded-md text-black font-poppins py-3 font-medium active:scale-[0.98] transition-all duration-200 ease-in-out"
          >
            Not you?
          </button>
        )}

        {isLoading || loading ? (
          <button className="w-1/2 h-[48px] bg-[#dddcea] flex items-center justify-center rounded-md text-secondary-text font-poppins font-semibold cursor-not-allowed">
            <BeatLoader size={10} />
          </button>
        ) : (
          <button
            onClick={handleOtpSend}
            className="w-1/2 bg-[#1877f2] rounded-md text-white font-poppins py-3 font-medium active:scale-[0.98] transition-all duration-200 ease-in-out"
          >
            Send otp
          </button>
        )}
      </div>
    </div>
  );
};

export default FoundAccount;
