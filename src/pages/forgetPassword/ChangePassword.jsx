import React, { useState } from "react";
import { usePasswordResetMutation } from "../../redux/api/authenticationApi";

const ChangePassword = ({ foundUserInfo }) => {
  const [passwordReset] = usePasswordResetMutation();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [info, setInfo] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleContinue = async () => {
    if (info.newPassword === "") {
      return setError((prev) => ({
        ...prev,
        newPassword: "plase enter a new password",
      }));
    }

    if (info.newPassword !== info.confirmPassword) {
      return setError((prev) => ({
        ...prev,
        confirmPassword: "password don't match, try again",
      }));
    }

    const response = await passwordReset({
      email: foundUserInfo.email,
      password: info.newPassword,
    });

    console.log(response);
  };

  return (
    <div className={"w-[600px] bg-white py-[30px] px-[50px] rounded-[10px]"}>
      <h4 className="font-poppins text-[28px] font-semibold mb-2.5">
        Create new password
      </h4>

      <p className="font-poppins text-[16px] text-secondary-text mb-[18px]">
        Create a strong password with a mix of letters, numbers and symbols
      </p>

      <div className="mb-8">
        <div className="mb-5">
          <label
            htmlFor="password"
            className="font-poppins font-medium text-lg block mb-[5px]"
          >
            new password
          </label>

          <div className="relative">
            <input
              id={"newPassword"}
              name={"newPassword"}
              autoFocus={true}
              onChange={handleChange}
              placeholder={"Enter new password"}
              type={isPasswordShow ? "text" : "password"}
              className={
                error.password
                  ? "w-full border-2 border-red-400 px-5 rounded-md outline-none py-2.5"
                  : "w-full border-2 border-primary-border px-5 rounded-md outline-none py-2.5"
              }
            />

            {error.password && (
              <p className="font-poppins text-red-400 text-sm absolute top-full left-0">
                {error.password}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="font-poppins font-medium text-lg block mb-[5px]"
          >
            confirm password
          </label>
          <div className="relative">
            <input
              id={"confirmPassword"}
              onChange={handleChange}
              name={"confirmPassword"}
              placeholder={"confirm your password"}
              type={isPasswordShow ? "text" : "password"}
              className={
                error.confirmPassword
                  ? "w-full border-2 border-red-400 px-5 rounded-md outline-none py-2.5"
                  : "w-full border-2 border-primary-border px-5 rounded-md outline-none py-2.5"
              }
            />

            {error.confirmPassword && (
              <p className="font-poppins text-red-400 text-sm absolute top-full left-0">
                {error.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-x-2.5">
          <input
            type="checkbox"
            id="show-password"
            onChange={() => setIsPasswordShow(!isPasswordShow)}
          />
          <label
            htmlFor="show-password"
            className="text-secondary-text font-poppins"
          >
            show password
          </label>
        </div>
      </div>

      <div className="flex justify-between gap-x-3">
        <button
          className={
            "rounded-md w-[50%] py-2.5 capitalize text-[16px] bg-[#e4e6eb] text-black font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
          }
        >
          back
        </button>

        <button
          onClick={handleContinue}
          className={
            "rounded-md w-[50%] py-2.5 capitalize text-[16px] bg-[#216fdb] text-white font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
