import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

const LoggedInUser = () => {
  const { information } = useSelector((state) => state.user);
  return information ? <Outlet /> : <Login />;
};

export default LoggedInUser;
