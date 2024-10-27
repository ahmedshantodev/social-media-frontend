import React, { useState } from "react";
import ripple_logo from "/public/images/ripple-logo.png";
import FormPart from "./FormPart";
import { Helmet } from "react-helmet-async";
import Modal from "../../components/modal/Modal";
import OtpVerification from "./OtpVerification";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../redux/api/authenticationApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeUser } from "../../redux/slices/activeUserSlice";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registration] = useRegistrationMutation();
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

  const handleOtpVerificationShow = () => {
    setIsOtpVerificationShow(true);
    setIsOtpModalShow(false);
  };

  const handleRegistration = async () => {
    const response = await registration({
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      password: info.password,
      birthDate: info.birthDate,
      birthMonth: info.birthMonth,
      birthYear: info.birthYear,
      gender: info.gender,
    });

    if (response.data?.message) {
      const { message, ...rest } = response.data;

      dispatch(activeUser(rest));
      localStorage.setItem("user", JSON.stringify(rest));

      toast.success(response.data?.message, {
        autoClose: 4000,
        position: "bottom-center",
        hideProgressBar: true,
        theme: "colored",
      });

      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Ripple | Registration</title>
      </Helmet>

      <section className="w-full h-screen bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[1400px] rounded-[30px] bg-[#f0f2f5] p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
                  handleRegistration={handleRegistration}
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
                className={`w-[550px] px-10 py-8`}
              >
                <h2 className="font-poppins text-3xl font-semibold mb-3">
                  OTP verification
                </h2>
                <h2 className="font-poppins text-[#6C6C73] mb-5">
                  To verify your account, We will send a 6-digit OTP to{" "}
                  <span className="font-medium text-black">{info.email}</span> .
                  Please check your inbox (and spam folder) for the code. This
                  code will be valid for 10 minutes.
                </h2>

                <button
                  onClick={handleOtpVerificationShow}
                  className="bg-[#097b09] w-full text-white py-2.5 rounded-[10px] text-lg font-inter font-medium border-2 border-[#097b09] active:scale-[0.98] transition-all duration-200 ease-in-out"
                >
                  Get OTP
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
