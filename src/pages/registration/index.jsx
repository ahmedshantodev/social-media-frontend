import React, { useState } from "react";
import ripple_logo from "/public/images/ripple-logo.png";
import FormPart from "./FormPart";
import { Helmet } from "react-helmet-async";
import Modal from "../../components/layout/Modal";
import OtpVerification from "./OtpVerification";
import { toast } from "react-toastify";
import {
  useRegistrationMutation,
  useSendUserVerificationOtpMutation,
  useVerifyUserVerificationOtpMutation,
} from "../../redux/api/authenticationApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeUser } from "../../redux/slices/activeUserSlice";
import { ColorRing } from "react-loader-spinner";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [verifyAndProcedLoading, setVerifyAndProcedLoading] = useState(false);
  const [registration, { isLoading: isRegistrationLoading }] = useRegistrationMutation();
  const [sendUserVerificationOtp, { isLoading: isOtpLoading }] = useSendUserVerificationOtpMutation();
  const [verifyUserVerificationOtp, { isLoading: isVerifyOtpLoading }] = useVerifyUserVerificationOtpMutation();

  const [isOtpModalShow, setIsOtpModalShow] = useState(false);
  const [isOtpVerificationShow, setIsOtpVerificationShow] = useState(false);

  const [info, setInfo] = useState({
    otp: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    profilePicture: "",
    coverPhoto: "",
  });

  const [error, setError] = useState({
    otp: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    age: "",
    gender: "",
  });

  const handleSendOtp = async () => {
    setLoading(true);
    const response = await sendUserVerificationOtp({
      firstName: info.firstName,
      email: info.email,
    });

    if (response.data?.message) {
      setTimeout(() => {
        setIsOtpVerificationShow(true);
        setIsOtpModalShow(false);
        setLoading(false);
      }, 1500);
    }
  };

  const handleVerifyOtp = async () => {
    setVerifyAndProcedLoading(true);

    const verificationResponse = await verifyUserVerificationOtp({
      email: info.email,
      otp: info.otp,
    });

    if (verificationResponse.error?.data?.message) {
      setVerifyAndProcedLoading(false);

      return setError((prev) => ({
        ...prev,
        otp: verificationResponse.error?.data?.message,
      }));
    }

    if (verificationResponse.data?.message) {
      const response = await registration({
        firstName: info.firstName,
        lastName: info.lastName,
        username: info.username.toLowerCase().split(" ").join(""),
        email: info.email,
        password: info.password,
        birthDate: info.birthDate,
        birthMonth: info.birthMonth,
        birthYear: info.birthYear,
        gender: info.gender,
        verified: true,
        profilePicture: info.profilePicture,
        coverPhoto: info.coverPhoto,
      });

      if (response.error?.data?.message) {
        setVerifyAndProcedLoading(false);

        return alert("somthing went wrong, please try again")
      }

      if (response.data?.message) {
        const { message, ...rest } = response.data;

        setTimeout(() => {
          dispatch(activeUser(rest));
          localStorage.setItem("user", JSON.stringify(rest));

          toast.success(message, {
            autoClose: 4000,
            position: "bottom-left",
            hideProgressBar: true,
          });

          setVerifyAndProcedLoading(false);
          navigate("/");
        }, 1000);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Ripple | Registration</title>
      </Helmet>

      <section className="w-full h-screen bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[1450px] rounded-[30px] bg-[#f0f2f5] py-10 px-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <img
              src={ripple_logo}
              alt="ripple-logo"
              className="w-[70px] mb-8"
            />
          </div>

          <div className="flex">
            <div className="w-[53%]">
              <h2 className="font-segoe-ui text-5xl font-medium text-secondary-text">
                Create a Ripple Account
              </h2>

              <p className="w-[80%] font-segoe-ui text-lg mt-5 font-normal text-secondary-text">
                We've saved your spot in the ripple, friend! ✨ Signin and
                connect with the conversations that sparked your mind. Dive back
                into the heart of Ripple, where whispers turn into waves of
                connection. Let's keep the good vibes flowing!
              </p>
            </div>

            <div className="w-[47%]">
              {isOtpVerificationShow ? (
                <OtpVerification
                  info={info}
                  setInfo={setInfo}
                  error={error}
                  setError={setError}
                  handleVerifyOtp={handleVerifyOtp}
                  isVerifyOtpLoading={isVerifyOtpLoading}
                  verifyAndProcedLoading={verifyAndProcedLoading}
                  setVerifyAndProcedLoading={setVerifyAndProcedLoading}
                />
              ) : (
                <FormPart
                  info={info}
                  setInfo={setInfo}
                  error={error}
                  setError={setError}
                  isOtpModalShow={isOtpModalShow}
                  setIsOtpModalShow={setIsOtpModalShow}
                />
              )}

              <Modal
                show={isOtpModalShow}
                setShow={setIsOtpModalShow}
                className={`w-[550px] px-10 pt-5 pb-7`}
              >
                <h2 className="font-poppins text-[28px] font-semibold mb-4 text-center border-b-2 border-primary-border">
                  OTP verification
                </h2>

                <h2 className="font-poppins text-lg text-[#6C6C73] mb-5">
                  To verify your account, We will send a 6-digit OTP to{" "}
                  <span className="font-medium text-black">{info.email}</span> .
                  Please check your inbox (and spam folder) for the code. This
                  code will be valid for 10 minutes.
                </h2>

                {isOtpLoading || loading ? (
                  <button className="bg-[#1877f2] w-full flex items-center justify-center rounded-[6px] border-2 border-[#1877f2] cursor-not-allowed">
                    <ColorRing
                      visible={true}
                      height="44"
                      width="44"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={[
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                      ]}
                    />
                  </button>
                ) : (
                  <button
                    onClick={handleSendOtp}
                    className="bg-[#1877f2] w-full text-white py-2.5 rounded-[6px] text-lgs font-inter border-2 border-[#1877f2] active:scale-[0.98] transition-all duration-200 ease-in-out"
                  >
                    Get OTP
                  </button>
                )}
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
