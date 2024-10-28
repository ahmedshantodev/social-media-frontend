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

      <div className="flex w-full h-[calc(100dvh-69px)] overflow-y-auto">
        <div className="scrollbar-parent w-[22%] h-[calc(100dvh-69px)] sticky top-0 left-0">
          <LeftPart />
        </div>

        <div className="w-[56%] pt-5">
          <Outlet />
        </div>

        <div className="scrollbar-parent w-[22%] h-[calc(100dvh-69px)] sticky top-0 left-0 pr-1">
          <RightPart />
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
