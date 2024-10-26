import React, { useState } from "react";
import ripple_logo from "/public/images/ripple-logo.png";

const Hello = () => {
  const [status, setStatus] = useState(1);

  const next = () => {
    if (status < 4) {
      setStatus((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (status > 1) {
      setStatus((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full h-screen bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
      <div className="w-[1400px] rounded-[30px] bg-[#f0f2f5] p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <img src={ripple_logo} alt="ripple-logo" className="w-[70px] mb-8" />

        <div className="flex">
          <div className="w-[53%]">
            <h2 className="font-segoe-ui text-5xl font-medium text-secondary-text">
              Create a Ripple Account
            </h2>
            <p className="font-segoe-ui text-xl mt-5 font-normal text-secondary-text">
              {status === 1
                ? "Enter your first and last name"
                : status === 2
                ? "Enter your birthdate and gender"
                : status === 3
                ? "Enter your email and username"
                : "Create a strong password with a mix of letters, numbers and symbols"}
            </p>
          </div>

          <div className="w-[47%]">
            <div className="mb-12 h-[210px] relative overflow-hidden">
              <div
                className={
                  status === 2 || status === 3 || status === 4
                    ? "absolute top-0 left-0 w-full pl-3 -translate-x-full transition-all duration-300 ease-in-out"
                    : "absolute top-0 left-0 w-full pl-3 translate-x-0 transition-all duration-300 ease-in-out"
                }
              >
                <div className="mb-4">
                  <label
                    htmlFor="first-name"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    First name :
                  </label>

                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter your first name"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    Last name :
                  </label>

                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter your last name (optional)"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>
              </div>

              <div
                className={
                  status === 2
                    ? "absolute top-0 left-0 w-full pl-3 translate-x-0 transition-all duration-300 ease-in-out"
                    : status === 3 || status === 4
                    ? "absolute top-0 left-0 w-full pl-3 -translate-x-full transition-all duration-300 ease-in-out"
                    : "absolute top-0 left-0 w-full pl-3 translate-x-full transition-all duration-300 ease-in-out"
                }
              >
                <p className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1">
                  Date of birth :
                </p>

                <div className="flex gap-x-4 mb-4">
                  <input
                    type="number"
                    id="birth-date"
                    placeholder="birth date"
                    className="w-1/3 border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui font-normal placeholder:text-lg"
                  />

                  <input
                    type="number"
                    id="birth-month"
                    placeholder="birth month"
                    className="w-1/3 border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui font-normal placeholder:text-lg"
                  />

                  <input
                    type="number"
                    id="birth-year"
                    placeholder="birth year"
                    className="w-1/3 border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui font-normal placeholder:text-lg"
                  />
                </div>

                <div>
                  <p className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1 ml-[3px]">
                    Gender :
                  </p>

                  <input
                    type="text"
                    id="gender"
                    placeholder="Enter your gender"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui font-normal placeholder:text-lg"
                  />
                </div>
              </div>

              <div
                className={
                  status === 3
                    ? "absolute top-0 left-0 w-full pl-3 translate-x-0 transition-all duration-300 ease-in-out"
                    : status === 3 || status === 4
                    ? "absolute top-0 left-0 w-full pl-3 -translate-x-full transition-all duration-300 ease-in-out"
                    : "absolute top-0 left-0 w-full pl-3 translate-x-full transition-all duration-300 ease-in-out"
                }
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>
              </div>

              <div
                className={
                  status === 4
                    ? "absolute top-0 left-0 w-full pl-3 translate-x-0 transition-all duration-300 ease-in-out"
                    : status === 4
                    ? "absolute top-0 left-0 w-full pl-3 -translate-x-full transition-all duration-300 ease-in-out"
                    : "absolute top-0 left-0 w-full pl-3 translate-x-full transition-all duration-300 ease-in-out"
                }
              >
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    Password :
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-xl font-segoe-ui font-medium text-secondary-text mb-1"
                  >
                    Confirm :
                  </label>
                  <input
                    type="text"
                    id="confirm-password"
                    placeholder="Re-enter your password"
                    className="w-full border-2 border-[#a8c7fa] focus:outline-2 focus:outline-[#a8c7fa] py-4 px-5 rounded-[6px] font-segoe-ui placeholder:font-segoe-ui placeholder:text-lg"
                  />
                </div>
              </div>
            </div>

            <div
              className={
                status === 1 ? "flex justify-end" : "flex justify-between"
              }
            >
              {status > 1 && (
                <button
                  onClick={previous}
                  className="bg-[#dddcea] text-[#062e6f] px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#a8c7fa]"
                >
                  Previous
                </button>
              )}

              <button
                onClick={next}
                className="bg-[#b6d0fb] text-[#062e6f] px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#a8c7fa]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
