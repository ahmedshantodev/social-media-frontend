import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotLoggedInUser = () => {
  const { information } = useSelector((state) => state.user);

  return information ? <Navigate to={"/"} /> : <Outlet />;
};

export default NotLoggedInUser;
