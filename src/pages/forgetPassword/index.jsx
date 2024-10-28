import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SearchAccount from "./SearchAccount";
import FoundAccount from "./FoundAccount";
import UserVerification from "./UserVerification";
import ChangePassword from "./ChangePassword";

const ForgetPassword = () => {
  const [foundUserInfo, setFoundUserInfo] = useState();
  const [activeItem, setActiveItem] = useState(0);

  const renderComponents = () => {
    switch (activeItem) {
      case 0:
        return (
          <SearchAccount
            setActiveItem={setActiveItem}
            setFoundUserInfo={setFoundUserInfo}
          />
        );
      case 1:
        return (
          <FoundAccount
            setActiveItem={setActiveItem}
            foundUserInfo={foundUserInfo}
          />
        );
      case 2:
        return (
          <UserVerification
            setActiveItem={setActiveItem}
            foundUserInfo={foundUserInfo}
          />
        );
      case 3:
        return <ChangePassword foundUserInfo={foundUserInfo} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Ripple | Forget password</title>
      </Helmet>

      <section className="w-full h-[100dvh] bg-[#dddcea] flex justify-center items-center">
        {renderComponents()}
      </section>
    </>
  );
};

export default ForgetPassword;
