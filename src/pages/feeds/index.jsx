import React from "react";
import { Helmet } from "react-helmet-async";
import PostCreatePart from "./PostCreatePart";
import StoriesPart from "./StoriesPart";
import PostPart from "./PostPart";

const Feeds = () => {
  return (
    <>
      <Helmet>
        <title>Ripple</title>
      </Helmet>

      <div className="w-[700px] mx-auto pb-1">
        <PostCreatePart />
        <StoriesPart />
        <PostPart />
      </div>
    </>
  );
};

export default Feeds;
