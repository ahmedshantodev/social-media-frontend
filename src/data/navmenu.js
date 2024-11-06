import newsFeedIcons from "/public/images/news-feed-icon.png";
import messengerLogo from "/public/images/messengerLogo.png";
import friendsLogo from "/public/images/friendsLogo.png";
import groupsLogo from "/public/images/groupsLogo.png";
import mediaLogo from "/public/images/mediaLogo.png";
import settingLogo from "/public/images/settingLogo.png";

export const navmenu = [
  {
    icon: newsFeedIcons,
    text: "News Feed",
    path: "/",
  },
  {
    icon: messengerLogo,
    text: "Messenger",
    path: "/messenger",
  },
  {
    icon: friendsLogo,
    text: "Friends",
    path: "/friends",
  },
  {
    icon: groupsLogo,
    text: "Groups",
    path: "/groups",
  },
  {
    icon: mediaLogo,
    text: "Media",
    path: "/media",
  },
  {
    icon: settingLogo,
    text: "Settings",
    path: "/settings",
  },
];
