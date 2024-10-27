import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Registration from "./pages/registration/index";
import Login from "./pages/login/index";
import Verification from "./pages/verification/index";
import NotLoggedInUser from "./privateRoute/NotLoggedInUser";
import LoggedInUser from "./privateRoute/LoggedInUser";
import RootLayout from "./pages/rootLayout";
import Feeds from "./pages/feeds";
import Messages from "./pages/messages";
import Friends from "./pages/friends";
import Media from "./pages/media";
import Profile from "./pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />} />
        {/* email ar poriborte otp send korar karone verification page bad jabe */}
        <Route path="/verification/:token" element={<Verification />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<LoggedInUser />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Feeds />} />
          <Route path="messages" element={<Messages />} />
          <Route path="friends" element={<Friends />} />
          <Route path="media" element={<Media />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
