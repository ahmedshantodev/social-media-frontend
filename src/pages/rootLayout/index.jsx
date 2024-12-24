import React from "react";
import Header from "../../components/section/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="bg-secondary-bg w-full h-dvh">
      <div className="w-full">
        <Header />
      </div>

      <div className="w-full h-[calc(100dvh-69px)]">
        <Outlet />
      </div>
    </section>
  );
};

export default RootLayout;
