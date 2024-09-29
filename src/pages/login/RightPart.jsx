import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NameEmailPassowrd from "./NameEmailPassowrd";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../redux/api/authenticationApi";
import { useFormik } from "formik";
import { signin } from "../../validation/index";
import rippleLogo from "/public/images/ripple-logo.png";
import { useDispatch } from "react-redux";
import { activeUser } from "../../redux/slices/activeUserSlice";

const RightPart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signin,
    onSubmit: async () => {
      const response = await login({
        email: formik.values.email,
        password: formik.values.password,
      });

      if (response.error?.data?.message) {
        if (response.error?.data?.message == "user not found") {
          return (formik.errors.email = response.error.data.message);
        }

        if (response.error?.data?.message == "wrong credential") {
          return (formik.errors.password = response.error.data.message);
        }
      }

      if (response.data?.message) {
        const { message, ...rest } = response.data;

        console.log(rest) ;
        dispatch(activeUser(rest));
        localStorage.setItem("user" , JSON.stringify(rest))

        toast.success(response.data?.message, {
          autoClose: 4000,
          position: "bottom-center",
          hideProgressBar: true,
          theme: "colored",
        });

        setTimeout(() => {
          formik.resetForm();
        }, 700);

        return setTimeout(() => {
          formik.resetForm();
          navigate("/");
        }, 1000);
      }
    },
  });

  return (
    <div className="w-full">
      <img
        src={rippleLogo}
        alt="ripple-logo"
        className="w-[50px] mx-auto mb-2 lg:hidden"
      />
      <h3
        className="font-inter font-semibold text-lg lg:text-[20px] 2xl:text-[26px] text-center lg:text-start mb-4 lg:mb-2 xl:mb-6"
      >
        Login to reconnect with your crew.
      </h3>

      <form onSubmit={formik.handleSubmit}>
        <NameEmailPassowrd
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values}
          error={formik.errors}
        />

        {isLoading ? (
          <button
            className="w-full rounded-full py-2 lg:py-2 2xl:py-3 bg-[#e0e3ea] text-black xs:text-[15px] text-base 2xl:text-lg font-poppins cursor-wait"
          >
            saving.....
          </button>
        ) : (
          <button
            type="submit"
            className="w-full rounded-full py-2 lg:py-2 2xl:py-3 bg-[#4474f4] text-white xs:text-[15px] text-base 2xl:text-lg font-poppins"
          >
            Login
          </button>
        )}
      </form>

      <Link
        to={"/registration"}
        className="xs:block lg:inline-block group font-poppins xs:text-[12px] text-sm 2xl:text-[16px] text-title_color mb-[2px] ml-[2px] mt-3 text-center lg:text-start"
      >
        don't have account?{" "}
        <span className="group-hover:underline group-hover:text-[#4474f4]">
          sign up
        </span>
      </Link>
    </div>
  );
};

export default RightPart;
