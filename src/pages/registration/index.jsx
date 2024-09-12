import React, { useState } from "react";
import Image from "../../components/layout/Image";
import Typography from "../../components/layout/Typography";
import registrationPageLeftImage from "/public/images/signup-image.png";
import Input from "../../components/layout/Input";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { useFormik } from "formik";

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

const Registration = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const formik = useFormik({
    initialValues: initialState,
    // validationSchema,
    onSubmit: () => {
      console.log("all set");
    },
  });

  const days = [
    { date: "01" },
    { date: "02" },
    { date: "03" },
    { date: "04" },
    { date: "05" },
    { date: "06" },
    { date: "07" },
    { date: "08" },
    { date: "09" },
    { date: "10" },
    { date: "11" },
    { date: "12" },
    { date: "13" },
    { date: "14" },
    { date: "15" },
    { date: "16" },
    { date: "17" },
    { date: "18" },
    { date: "19" },
    { date: "20" },
    { date: "21" },
    { date: "22" },
    { date: "23" },
    { date: "24" },
    { date: "25" },
    { date: "26" },
    { date: "27" },
    { date: "28" },
    { date: "29" },
    { date: "30" },
    { date: "31" },
  ];

  const months = [
    { number: "01", month: "January" },
    { number: "02", month: "February" },
    { number: "03", month: "March" },
    { number: "04", month: "April" },
    { number: "05", month: "May" },
    { number: "06", month: "June" },
    { number: "07", month: "July" },
    { number: "08", month: "August" },
    { number: "09", month: "September" },
    { number: "10", month: "October" },
    { number: "11", month: "November" },
    { number: "12", month: "December" },
  ];

  return (
    <>
      <Helmet>
        <title>Ripple | Registration</title>
      </Helmet>
      <section className="w-full h-dvh bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
        <div className="bg-white rounded-[28px] w-[90%] h-[85%] py-12 px-16 flex items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <div className="w-[43%] border-r-2 border-[#cacad8]">
            <Typography
              variant="h3"
              className="font-inter font-semibold text-[25px]"
            >
              Ripple - Where Connections Make Waves
            </Typography>

            <Image
              src={registrationPageLeftImage}
              alt={"registration-page-left-image"}
              className={`w-[78%] mx-auto`}
            />

            <Typography
              variant="h3"
              className="font-poppins text-lg text-title_color leading-normal w-[90%] text-justify"
            >
              We've saved your spot in the ripple, friend! ✨ Login and
              reconnect with the conversations that sparked your mind. Dive back
              into the heart of Ripple, where whispers turn into waves of
              connection. Let's keep the good vibes flowing!
            </Typography>
          </div>

          <div className="w-[62%] pl-14">
            <Typography
              variant="h3"
              className="font-inter font-semibold text-[25px] mb-4"
            >
              Create Your Free Ripple Account
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="p"
                className="font-poppins text-[17px] text-title_color mb-[2px] ml-[2px]"
              >
                Name, Email and Password :
              </Typography>
              <div className="flex gap-7 mb-6">
                <Input
                  type={"text"}
                  id={"firstName"}
                  name={"firstName"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder={"First name"}
                  error={false}
                  className={`w-2/4`}
                />
                <Input
                  type={"text"}
                  id={"lastName"}
                  name={"lastName"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder={"Last name (optional)"}
                  error={false}
                  className={`w-2/4`}
                />
              </div>

              <div className="mb-6">
                <Input
                  type={"email"}
                  id={"email"}
                  name={"email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={"Enter your email"}
                  error={false}
                  className={`w-full`}
                />
              </div>

              <div className="mb-6 relative">
                <Input
                  type={passwordShow ? "text" : "password"}
                  id={"password"}
                  name={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder={"Enter your password ( 6+ characters )"}
                  error={false}
                  className={`w-full`}
                />
                {passwordShow ? (
                  <BsEyeFill
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-2/4 -translate-y-2/4 right-5 box-content text-lg cursor-pointer p-1"
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-2/4 -translate-y-2/4 right-5 box-content text-lg cursor-pointer p-1"
                  />
                )}
              </div>

              <Typography
                variant="p"
                className="font-poppins text-[17px] text-title_color mb-[2px] ml-[2px]"
              >
                Date of birth :
              </Typography>
              <div className="mb-6 flex justify-between gap-6">
                <select
                  id="birthDate"
                  name="birthDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthDate}
                  className="w-1/3 border border-[#cacad8] font-poppins text-[#9e949c]s text-black py-[17px] px-7 rounded-[8px] focus:outline-1 focus:outline-[#dddcea]"
                >
                  <option value="birth-date">Birth date</option>
                  {days.map((item, index) => (
                    <option key={index} value={item.date}>
                      {item.date}
                    </option>
                  ))}
                </select>

                <select
                  id="birthMonth"
                  name="birthMonth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthMonth}
                  className="w-1/3 border border-[#cacad8] font-poppins text-[#9e949c]s text-black py-[17px] px-7 rounded-[8px] focus:outline-1 focus:outline-[#dddcea]"
                >
                  <option value="birth-month">Birth month</option>
                  {months.map((item, index) => (
                    <option key={index} value={item.month}>
                      {item.month}
                    </option>
                  ))}
                </select>

                <div className="w-1/3">
                  <Input
                    type={"text"}
                    id={"birthYear"}
                    name={"birthYear"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthYear}
                    placeholder={"Enter your birth year"}
                    error={false}
                    className={`w-full`}
                  />
                </div>

                {/* <select
                  id="birthYear"
                  name="birthYear"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthYear}
                  className="w-[33%] border border-[#cacad8] font-poppins text-[#9e949c]s text-black py-[17px] px-7 rounded-[8px] focus:outline-1 focus:outline-[#dddcea]"
                >
                  <option value="Birth year" selected>
                    Birth year
                  </option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                </select> */}
              </div>

              <Typography
                variant="p"
                className="font-poppins text-[17px] text-title_color mb-[2px] ml-[2px]"
              >
                Gender :
              </Typography>
              <div className="flex gap-6 mb-6">
                <div
                  onClick={() => setSelectedGender("male")}
                  className={
                    selectedGender == "male"
                      ? "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer bg-[#e2e3f0] text-black"
                      : "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer"
                  }
                >
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-[20px] aspect-square cursor-pointer"
                  />
                  <label
                    htmlFor="male"
                    className="block cursor-pointer py-[17px] w-full"
                  >
                    Male
                  </label>
                </div>

                <div
                  onClick={() => setSelectedGender("female")}
                  className={
                    selectedGender == "female"
                      ? "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer bg-[#e2e3f0] text-black"
                      : "w-2/4 border border-[#cacad8] font-poppins text-[#9e949c] rounded-[8px] pl-4 flex gap-3 overflow-hidden cursor-pointer"
                  }
                >
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-[20px] aspect-square cursor-pointer"
                  />
                  <label
                    htmlFor="female"
                    className="block cursor-pointer py-[17px] w-full"
                  >
                    Female
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-[14px] bg-[#4474f4] text-white text-lg font-poppins"
              >
                sign up
              </button>
            </form>

            <Link
              to={"/login"}
              className="inline-block group font-poppins text-[16px] text-title_color mb-[2px] ml-[2px] mt-3"
            >
              Already have account?{" "}
              <span className="group-hover:underline group-hover:text-[#4474f4]">
                Login
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
