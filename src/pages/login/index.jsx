import React, { useState } from "react";
import registrationPageLeftImage from "/public/images/login-image.jpg";
import { Helmet } from "react-helmet-async";
import LeftPart from "../login/LeftPart";
import RightPart from "../login/RightPart";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Ripple | Login</title>
      </Helmet>
      <section className="w-full h-dvh bg-white xl:bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
        <div className="bg-white xl:rounded-[28px] w-full xl:w-[90%] xl:h-[60%] py-7 md:py-9 2xl:py-12 px-6 sm:px-8 xl:px-10 2xl:px-16 flex items-center xl:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <div className="bg-white hidden lg:block w-[40%] lg:border-r-2 border-[#cacad8]">
            <LeftPart
              title="Ripple - Where Connections Make Waves"
              image={registrationPageLeftImage}
              imageAltText={"registration-page-left-image"}
              description={
                "We've saved your spot in the ripple, friend! ✨ Login and reconnect with the conversations that sparked your mind. Dive back into the heart of Ripple, where whispers turn into waves of connection. Let's keep the good vibes flowing!"
              }
            />
          </div>

          <div className="w-full bg-white lg:w-[60%] lg:pl-8 xl:pl-10 2xl:pl-14">
            <RightPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
