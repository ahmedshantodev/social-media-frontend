import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Header from "../../components/section/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="bg-secondary-bg w-full h-dvh">
      <div className="w-full sticky top-0 left-0 z-50">
        <Header />
      </div>

      <div className="flex w-full pt-5 pl-2 pr-3">
        <div className="w-[20%]">
          <LeftPart />
        </div>

        <div className="w-[60%]">
          <Outlet />
        </div>

        <div className="w-[20%]">
          <RightPart />
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
