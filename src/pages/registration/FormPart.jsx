import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Name from "./Name";
import Password from "./Password";
import BirthDate_Gender from "./BirthDate_Gender";
import Email_Username from "./Email_Username";
import {
  useFindUserEmailMutation,
  useFindUsernameMutation,
} from "../../redux/api/authenticationApi";
import { ColorRing } from "react-loader-spinner";

const FormPart = ({
  info,
  setInfo,
  error,
  setError,
  isOtpModalShow,
  setIsOtpModalShow,
}) => {
  const [loading, setLoading] = useState(false);
  const [findUserEmail, { isLoading: isUserEmailLoading }] =
    useFindUserEmailMutation();
  const [findUsername, { isLoading: isUserNameLoading }] =
    useFindUsernameMutation();
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    setError((prev) => ({
      ...prev,
      age: "",
    }));
  }, [info.birthDate, info.birthMonth, info.birthYear]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const next = () => {
    if (activeItem < 4) {
      setActiveItem((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (activeItem > 1) {
      setActiveItem((prev) => prev - 1);
    }
  };

  const handleNext = async () => {
    if (activeItem === 1) {
      if (info.firstName === "") {
        return setError((prev) => ({
          ...prev,
          firstName: "please enter your first name",
        }));
      }

      if (info.firstName.length < 4 || info.firstName.length > 25) {
        return setError({
          ...error,
          firstName: "first name must be 4-20 words long.",
        });
      }

      next();
    }

    if (activeItem === 2) {
      const under_age = new Date(1970 + 18, 0, 1);
      const current_date = new Date();
      const picked_date = new Date(
        info.birthYear,
        info.birthMonth - 1,
        info.birthDate
      );

      if (info.birthDate === "") {
        return setError({
          ...error,
          birthDate: "please select birth day",
        });
      }

      if (info.birthMonth === "") {
        return setError({
          ...error,
          birthMonth: "please select birth month",
        });
      }

      if (info.birthYear === "") {
        return setError({
          ...error,
          birthYear: "please select birth year",
        });
      }

      if (current_date - picked_date < under_age) {
        return setError({
          ...error,
          age: "Age restriction: You must be at least 18 years old to create an account.",
        });
      }

      if (info.gender === "") {
        return setError({
          ...error,
          gender: "please enter your gender",
        });
      }

      next();
    }

    if (activeItem === 3) {
      let regex =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      let check = regex.test(info.email);

      if (info.email === "") {
        return setError({
          ...error,
          email: "please enter your email",
        });
      }

      if (!check) {
        return setError({
          ...error,
          email: "please enter a valid email",
        });
      }

      if (info.username === "") {
        return setError({
          ...error,
          username: "please enter a username",
        });
      }

      if (info.username.length < 4 || info.username.length > 40) {
        return setError({
          ...error,
          username: "username must be 10-40 words long.",
        });
      }

      setLoading(true);

      const emailResponse = await findUserEmail({ email: info.email });
      if (emailResponse.error?.data?.message) {
        setLoading(false);

        return setError({
          ...error,
          email: emailResponse.error?.data?.message,
        });
      }

      const usernameResponse = await findUsername({ username: info.username });
      if (usernameResponse.error?.data?.message) {
        setLoading(false);

        return setError({
          ...error,
          username: usernameResponse.error?.data?.message,
        });
      }

      setTimeout(() => {
        setLoading(false);
        next();
      }, 1000);
    }

    if (activeItem === 4) {
      if (info.password === "") {
        return setError({
          ...error,
          password: "please enter your password",
        });
      }

      if (info.password.length < 6) {
        return setError({
          ...error,
          password: "password must be at least 6 characters long",
        });
      }

      if (info.password != info.confirmPassword) {
        return setError({
          ...error,
          confirmPassword: "passwords don't match, please try again.",
        });
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsOtpModalShow(true);
      }, 500);
    }
  };

  return (
    <div>
      <div className="mb-12 h-[250px] relative overflow-hidden">
        <Name
          info={info}
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />

        <BirthDate_Gender
          info={info}
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />

        <Email_Username
          info={info}
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />

        <Password
          info={info}
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between px-2">
        <Link
          to={"/login"}
          className="group font-segoe-ui font-medium text-secondary-text"
        >
          Already have account?{" "}
          <span className="group-hover:underline">Login</span>
        </Link>

        <div className={"flex justify-between gap-x-3 pl-3"}>
          {activeItem > 1 && (
            <button
              onClick={previous}
              className="bg-[#b6d0fb] px-[15px] py-2.5 rounded-full font-segoe-ui font-medium active:scale-[0.95] transition-all duration-200 ease-in-out"
            >
              <IoIosArrowBack className="text-2xl text-[#062e6f]" />
            </button>
          )}

          {isUserEmailLoading || isUserNameLoading || loading ? (
            <button className="bg-[#1877f2] text-white w-[130px] flex items-center justify-center rounded-full text-lg font-segoe-ui font-medium border-2 border-[#1877f2] cursor-not-allowed">
              <ColorRing
                visible={true}
                height="48"
                width="48"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
              />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#1877f2] text-white w-[130px] py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#1877f2]"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormPart;
