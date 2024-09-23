import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration/index";
import Login from "./pages/login";
import Home from "./pages/home";
import NotLoggedInUser from "./privateRoute/NotLoggedInUser";
import LoggedInUser from "./privateRoute/LoggedInUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<LoggedInUser />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
