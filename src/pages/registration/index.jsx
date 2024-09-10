import React from "react";
import Image from "../../components/layout/Image";
import Typography from "../../components/layout/Typography";
import registrationPageLeftImage from "/public/images/signup-image.png";
import rippleLogo from "/public/images/ripple-logo.png";
import Input from "../../components/layout/Input";

const Registration = () => {
  return (
    <section className="w-full h-dvh bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-white rounded-[28px] w-[85%] h-[85%] py-12 px-14 flex items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="w-[40%] border-r-2 border-[#cacad8]">
          <Typography
            variant="h3"
            className="font-inter font-semibold text-[25px]"
          >
            Ripple - Where Connections Make Waves
          </Typography>

          <Image
            src={registrationPageLeftImage}
            alt={"registration-page-left-image"}
            className={`w-[80%] mx-auto`}
          />

          <Typography
            variant="h3"
            className="font-poppins text-lg text-title_color leading-normal w-[90%]"
          >
            We've saved your spot in the ripple, friend! ✨ Login and reconnect
            with the conversations that sparked your mind. Dive back into the
            heart of Ripple, where whispers turn into waves of connection. Let's
            keep the good vibes flowing!
          </Typography>
        </div>

        <div className="w-[60%] pl-16">
          <Typography
            variant="h3"
            className="font-inter font-semibold text-[25px] mb-6"
          >
            Create Your Free Ripple Account
          </Typography>

          <h4>name and email</h4>
          <div className="flex gap-7 mb-6">
            <Input
              type={"text"}
              id={"firstname"}
              name={"firstname"}
              placeholder={"First name"}
              error={false}
              className={`w-2/4`}
            />
            <Input
              type={"text"}
              id={"lastname"}
              name={"lastname"}
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
              placeholder={"Enter your email"}
              error={false}
              className={`w-full`}
            />
          </div>

          <div className="mb-6">
            <Input
              type={"password"}
              id={"password"}
              name={"password"}
              placeholder={"Enter your password ( 6+ characters )"}
              error={false}
              className={`w-full`}
            />
          </div>

          <h4>Date of birth</h4>
          <div className="mb-6 flex justify-between gap-6">
            <div className="w-[33%] border border-[#cacad8] font-poppins text-[#9e949c] py-[17px] px-7 rounded-[8px]">
              Birth date
            </div>

            <div className="w-[33%] border border-[#cacad8] font-poppins text-[#9e949c] py-[17px] px-7 rounded-[8px]">
              Birth month
            </div>

            <div className="w-[33%] border border-[#cacad8] font-poppins text-[#9e949c] py-[17px] px-7 rounded-[8px]">
              Birth year
            </div>
          </div>

          <h4>Gender</h4>
          <div className="mb-6 flex justify-between gap-6">
            <div className="w-[50%] border border-[#cacad8] font-poppins text-[#9e949c] py-[17px] px-7 rounded-[8px]">
              Male
            </div>

            <div className="w-[50%] border border-[#cacad8] font-poppins text-[#9e949c] py-[17px] px-7 rounded-[8px]">
              Female
            </div>
          </div>

          <button className="w-full rounded-full py-[14px] bg-[#4474f4] text-white text-lg font-poppins">
            sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
