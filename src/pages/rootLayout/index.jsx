import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Header from "../../components/section/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="bg-secondary-bg w-full h-dvh overflow-y-auto">
      <div className="w-full">
        <Header />
      </div>

      <div className="flex w-full h-[calc(100dvh-69px)] overflow-y-auto pl-3 pr-1">
        <div className="w-[20%] h-[calc(100dvh-69px)] pt-5 sticky top-0 left-0 hover:overflow-y-auto pb-6">
          <LeftPart />
        </div>

        <div className="w-[58%] pt-5">
          <Outlet />
        </div>

        <div className="w-[22%] h-[calc(100dvh-69px)] pt-5 sticky top-0 left-0 hover:overflow-y-auto pr-1 pb-8">
          <RightPart />
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
