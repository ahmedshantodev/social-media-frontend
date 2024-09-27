import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="flex pt-2 px-10">
      <div className="w-[20%]">
        <LeftPart />
      </div>

      <div className="w-[53%]">
        <Header />
        <Outlet />
      </div>

      <div className="w-[27%]">
        <RightPart />
      </div>
    </section>
  );
};

export default RootLayout;
