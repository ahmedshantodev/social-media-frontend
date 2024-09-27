import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="grid grid-cols-[1.5fr,3fr,1.5fr]">
      <div>
        <LeftPart />
      </div>

      <div>
        <Header />
        <Outlet />
      </div>

      <div>
        <RightPart />
      </div>
    </section>
  );
};

export default RootLayout;
