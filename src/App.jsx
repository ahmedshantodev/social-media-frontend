import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import NotLoggedInUser from "./privateRoute/NotLoggedInUser";
import LoggedInUser from "./privateRoute/LoggedInUser";
import ForgetPassword from "./pages/forgetPassword";
import Registration from "./pages/registration/index";
import Login from "./pages/login/index";
import RootLayout from "./pages/rootLayout";
import Feeds from "./pages/feeds";
import Messenger from "./pages/messenger";
import Friends from "./pages/friends";
import Media from "./pages/media";
import Profile from "./pages/profile";
import Groups from "./pages/groups";
import Settings from "./pages/settings";
import AllFriends from "./pages/friends/AllFriends";
import AddFriends from "./pages/friends/AddFriends";
import FriendRequsts from "./pages/friends/FriendRequsts";
import SentRequsts from "./pages/friends/SentRequsts";
import BlockedUser from "./pages/friends/BlockedUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/forget-password" element={<ForgetPassword />} />
      
      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<LoggedInUser />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Feeds />} />
          <Route path="messenger" element={<Messenger />} />
          <Route path="friends" element={<Friends />} />
          
          <Route path="friends" element={<Friends />}>
            <Route path="all-friends" element={<AllFriends />} />
            <Route path="add-friends" element={<AddFriends />} />
            <Route path="friend-requst" element={<FriendRequsts />} />
            <Route path="sent-requst" element={<SentRequsts />} />
            <Route path="blocked-user" element={<BlockedUser />} />
          </Route>

          <Route path="groups" element={<Groups />} />
          <Route path="media" element={<Media />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/:username" element={<Profile />} />
        </Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
