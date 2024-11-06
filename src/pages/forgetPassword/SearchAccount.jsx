import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { useFindUserMutation } from "../../redux/api/authenticationApi";
import { ColorRing } from "react-loader-spinner";

const SearchAccount = ({ setActiveItem, setFoundUserInfo }) => {
  const [loading, setLoading] = useState(false);
  const [findUser, { isLoading }] = useFindUserMutation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSearch = async () => {
    try {
      if (email === "") {
        return setError("please enter a email");
      }
      const response = await findUser({ email: email });

      if (response.error?.data?.message) {
        return setError(response.error?.data?.message);
      }

      if (response.data) {
        setFoundUserInfo(response.data);
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setActiveItem(1);
        }, 2000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={"w-[600px] bg-white py-[30px] px-[50px] rounded-[10px]"}>
      <h4 className="font-poppins text-[30px] font-semibold mb-2.5">
        Find your account
      </h4>

      <p className="font-poppins text-[16px] text-secondary-text mb-[18px]">
        To retrieve your account information and regain access, kindly provide
        your email address. Our system will then guide you through the next
        steps.
      </p>

      <label
        htmlFor="email"
        className="font-poppins font-semibold text-[20px] block mb-[5px]"
      >
        Enter Your Email
      </label>

      <div className="relative mb-4">
        <div className={"w-full relative"}>
          <MdOutlineMail
            className={
              "text-[25px] text-secondary-text absolute top-2/4 -translate-y-2/4 left-4"
            }
          />

          <input
            name={"email"}
            id={"email"}
            type={"text"}
            autoFocus={true}
            onChange={handleChange}
            placeholder={"Enter Your Email"}
            className={
              "border-2 border-primary-border rounded-md outline-none py-[15px] pl-14 pr-4 text-[16px] w-full placeholder:capitalize placeholder:text-[16px]"
            }
          />
        </div>
      </div>

      {error && (
        <div className="bg-[#ffebe8] border-2 border-[#dd3c10] w-full p-2 mb-5">
          <h3 className="font-poppins font-medium">No search results</h3>
          <p className="text-secondary-text text-sm font-poppins">
            Your search did not return any results. Please try again with other
            information.
          </p>
        </div>
      )}

      <div className="flex justify-between gap-x-3">
        {isLoading || loading ? (
          <button
            className={
              "rounded-md w-[50%] py-3 capitalize text-[16px] bg-[#dddcea] text-secondary-text font-semibold text-center cursor-not-allowed"
            }
          >
            back
          </button>
        ) : (
          <Link
            to={"/"}
            className={
              "rounded-md w-[50%] py-3 capitalize text-[16px] bg-[#dddcea] font-semibold text-center active:scale-[0.98] transition-all duration-200 ease-in-out"
            }
          >
            back
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
            onClick={handleSearch}
            className={
              "rounded-md w-[50%] py-3 capitalize text-[16px] bg-[#1877f2] text-white font-semibold active:scale-[0.98] transition-all duration-200 ease-in-out"
            }
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchAccount;
