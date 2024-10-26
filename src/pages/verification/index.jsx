import React from "react";
import { useParams } from "react-router-dom";

const index = () => {
  const { token } = useParams();

  return <div>index</div>;
};

export default index;
