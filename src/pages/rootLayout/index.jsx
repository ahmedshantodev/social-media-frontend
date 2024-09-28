import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="bg-[#f0f2f5] w-full h-dvh">
      <div className="w-full sticky top-0 left-0 z-50">
        <Header />
      </div>

      <div className="flex w-full pt-5 pl-2 pr-3">
        <div className="w-1/4">
          <LeftPart />
        </div>

        <div className="w-2/4">
          <Outlet />
        </div>

        <div className="w-1/4">
          <RightPart />
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
