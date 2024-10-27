import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Name from "./Name";
import Password from "./Password";
import BirthDate_Gender from "./BirthDate_Gender";
import Email_Username from "./Email_Username";

const FormPart = ({
  info,
  setInfo,
  error,
  setError,
  isOtpModalShow,
  setIsOtpModalShow,
}) => {
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

  const handleNext = () => {
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
          firstName: "First name must be 4-20 words long.",
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
          username: "User name must be 10-40 words long.",
        });
      }

      next();
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

      setIsOtpModalShow(true);
    }
  };

  return (
    <div>
      <div className="mb-12 h-[250px] relative overflow-hidden">
        <Name error={error} activeItem={activeItem} onChange={handleChange} />

        <BirthDate_Gender
          info={info}
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />

        <Email_Username
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />

        <Password
          error={error}
          activeItem={activeItem}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={"/login"}
          className="group font-segoe-ui font-medium text-secondary-text ml-4"
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

          <button
            onClick={handleNext}
            className="bg-[#097b09] text-white px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#097b09] active:scale-[0.95] transition-all duration-200 ease-in-out"
          >
            {activeItem === 4 ? "Sign in" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPart;
