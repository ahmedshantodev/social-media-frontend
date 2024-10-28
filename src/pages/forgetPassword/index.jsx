import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

const ForgetPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSend = () => {
    if (email === "") {
      return setError("Please enter your email");
    }
  };

  return (
    <>
      <Helmet>
        <title>Ripple | Forget password</title>
      </Helmet>

      <section className="w-full h-[100dvh] bg-[#dddcea] flex justify-center items-center">
        <div
          className={"w-[600px] bg-white py-[30px] px-[50px] rounded-[10px]"}
        >
          <h4 className="font-poppins text-[30px] font-semibold mb-2.5">
            Reset Password
          </h4>

          <p className="font-poppins text-[16px] text-secoundaryText mb-[18px]">
            Forgot your password? No problem! Enter your email address and we'll
            send you a link. Click Link & Enter Your New Password
          </p>

          <label
            htmlFor="email"
            className="font-poppins font-semibold text-[20px] block mb-[5px]"
          >
            Enter Your Email
          </label>
          <div className="relative mb-7">
            <div
              className={
                error
                  ? "w-full flex items-center border-2 border-red-400 px-[15px] rounded-md"
                  : "w-full flex items-center border-2 border-primary-border px-[15px] rounded-md"
              }
            >
              <MdOutlineMail className="text-[25px]" />
              <input
                name={"email"}
                id={"email"}
                type={"text"}
                onChange={handleChange}
                placeholder={"Enter Your Email"}
                className={
                  "border-none outline-none py-[15px] pl-[15px] text-[16px] w-full placeholder:capitalize placeholder:text-[16px]"
                }
              />
            </div>

            {error && (
              <p className="font-poppins text-red-400 text-sm absolute top-full left-0">
                {error}
              </p>
            )}
          </div>
          <div className="flex justify-between gap-x-3">
            <button
              onClick={handleSend}
              className={
                "rounded-md w-[50%] py-2.5 capitalize text-[16px] bg-[#097b09] text-white font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
              }
            >
              Send reset Email
            </button>

            <Link
              to={"/"}
              className={
                "rounded-md w-[50%] py-2.5 capitalize text-[16px] bg-[#dddcea] font-semibold text-center active:scale-[0.98] transition-all duration-200 ease-in-out"
              }
            >
              back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
