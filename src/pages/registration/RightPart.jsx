import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/layout/Typography";
import NameEmailPassowrd from "./NameEmailPassowrd";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../redux/api/authenticationApi";
import { useFormik } from "formik";
import { signup } from "../../validation/index";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthDate: "",
  birthMonth: "",
  birthYear: "",
  gender: "",
};

const RightPart = () => {
  const navigate = useNavigate();
  const [registration, { isLoading }] = useRegistrationMutation();

  const under_age = new Date(1970 + 18, 0, 1);
  const current_date = new Date();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signup,
    onSubmit: async () => {
      const picked_date = new Date(
        formik.values.birthYear,
        formik.values.birthMonth - 1,
        formik.values.birthDate
      );

      if (current_date - picked_date < under_age) {
        return toast.error(
          "Age restriction: You must be at least 18 years old to create an account.",
          {
            autoClose: 4000,
            position: "bottom-center",
            hideProgressBar: true,
            theme: "colored",
          }
        );
      }

      const response = await registration({
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        password: formik.values.password,
        birthDate: formik.values.birthDate,
        birthMonth: formik.values.birthMonth,
        birthYear: formik.values.birthYear,
        gender: formik.values.gender,
      });

      if (response.error?.data?.message) {
        return (formik.errors.email = response.error.data.message);
      }

      if (response.data?.message) {
        setTimeout(() => {
          formik.resetForm();
        }, 1000);

        setTimeout(() => {
          navigate("/login");
        }, 1500);

        return toast.success(response.data?.message, {
          autoClose: 4000,
          position: "bottom-center",
          hideProgressBar: true,
          theme: "colored",
        });
      }
    },
  });

  return (
    <div className="w-full">
      <Typography
        variant="h3"
        className="font-inter font-semibold text-xl lg:text-[22px] 2xl:text-[25px] text-center md:text-start mb-4 lg:mb-2 xl:mb-4"
      >
        Create Your Free Ripple Account
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <NameEmailPassowrd
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values}
          error={formik.errors}
        />

        <DateOfBirth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values}
          error={formik.errors}
        />

        <Gender
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors}
        />

        {isLoading ? (
          <button
            type="submit"
            className="w-full rounded-full py-2 lg:py-2 2xl:py-3 bg-[#e0e3ea] text-black xs:text-[15px] text-base 2xl:text-lg font-poppins cursor-wait"
          >
            saving.....
          </button>
        ) : (
          <button
            type="submit"
            className="w-full rounded-full py-2.5 lg:py-2 2xl:py-[14px] bg-[#4474f4] text-white text-base 2xl:text-lg font-poppins"
          >
            sign up
          </button>
        )}
      </form>

      <Link
        to={"/login"}
        className="inline-block group font-poppins text-sm 2xl:text-[16px] text-title_color mb-[2px] ml-[2px] mt-3 text-center md:text-start"
      >
        Already have account?{" "}
        <span className="group-hover:underline group-hover:text-[#4474f4]">
          Login
        </span>
      </Link>
    </div>
  );
};

export default RightPart;

// const [info, setInfo] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   birthDate: "",
//   birthMonth: "",
//   birthYear: "",
//   gender: "",
// });

// const [error, setError] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   birthDate: "",
//   birthMonth: "",
//   birthYear: "",
//   gender: "",
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setInfo((prev) => ({
//     ...prev,
//     [name]: value,
//   }));

//   setError((prev) => ({
//     ...prev,
//     [name]: "",
//   }));
// };

// const handleSubmit = async () => {
//   let regex =
//     /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//   let check = regex.test(info.email);

//   const under_age = new Date(1970 + 18, 0, 1);
//   const current_date = new Date();
//   const picked_date = new Date(
//     info.birthYear,
//     info.birthMonth - 1,
//     info.birthDate
//   );

//   if (info.firstName === "") {
//     return setError({
//       ...error,
//       firstName: "please enter your firstname",
//     });
//   }

//   if (info.firstName.length < 4) {
//     return setError({
//       ...error,
//       firstName: "first name too short",
//     });
//   }

//   if (info.firstName.length > 25) {
//     return setError({
//       ...error,
//       firstName: "first name too long",
//     });
//   }

//   if (info.email === "") {
//     return setError({
//       ...error,
//       email: "please enter your email",
//     });
//   }

//   if (!check) {
//     return setError({
//       ...error,
//       email: "please enter a valid email",
//     });
//   }

//   if (info.password === "") {
//     return setError({
//       ...error,
//       password: "please enter your password",
//     });
//   }

//   if (info.password.length <= 6 || info.password.length >= 20) {
//     return setError({
//       ...error,
//       password: "password must be at least 6 and max 20 characters long",
//     });
//   }

//   if (info.birthDate === "" || info.birthDate == "birth-date") {
//     return setError({
//       ...error,
//       birthDate: "please enter your birth date",
//     });
//   }

//   if (info.birthMonth === "" || info.birthMonth == "birth-month") {
//     return setError({
//       ...error,
//       birthMonth: "please enter your birth month",
//     });
//   }

//   if (info.birthYear === "" || info.birthYear == "birth-year") {
//     return setError({
//       ...error,
//       birthYear: "please enter your birth birth year",
//     });
//   }

//   if (current_date - picked_date < under_age) {
//     toast.error(
//       "Age restriction: You must be at least 18 years old to create an account.",
//       {
//         autoClose: 4000,
//         position: "bottom-center",
//         hideProgressBar: true,
//         theme: "colored",
//       }
//     );

//     return;
//   }

//   if (info.gender === "") {
//     return setError({
//       ...error,
//       gender: "please enter your gender",
//     });
//   }

//   const response = await registration({
//     firstName: info.firstName,
//     lastName: info.lastName,
//     email: info.email,
//     password: info.password,
//     birthDate: info.birthDate,
//     birthMonth: info.birthMonth,
//     birthYear: info.birthYear,
//     gender: info.gender,
//   });

//   if (response.error?.data?.message) {
//     return setError({
//       ...error,
//       email: response.error.data.message,
//     });
//   }

//   console.log(response);

//   toast.success(
//     "Registration successfull, please check your email for a verification link to activate your account.",
//     {
//       autoClose: 4000,
//       position: "bottom-center",
//       hideProgressBar: true,
//       theme: "colored",
//     }
//   );
// };
