import Login from "../app/auth/login";
import Profile from "../app/auth/profile";
import SignUp from "../app/auth/signUp";
import Fqa from "../app/faq";
import Home from "../app/home";
import Journal from "../app/journal";
import Setting from "../app/settings";
import PersonalInformation from "../components/profileInformation";

const AUTH_ROUTES = [
  {
    id: 1,
    name: "Signup",
    path: "/",
    component: <SignUp />,
  },
  {
    id: 2,
    name: "Login",
    path: "/login",
    component: <Login />,
  },

  
  {
    id: 3,
    name: "Profile",
    component: <Profile />,
    exact: "exact",
    path: "/profile",
  },

]

const APP_Route = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    exact: "exact",
    path: "/home",
  },
  {
    id: 2,
    name: "Journal",
    component: <Journal />,
    exact: "exact",
    path: "/journal",
  },
  {
    id: 3 ,
    name: "FAQ",
    component: <Fqa />,
    exact: "exact",
    path: "/faq",
  },
  {
    id: 4,
    name: "Profile-information",
    component: <PersonalInformation />,
    exact: "exact",
    path: "/profile-information",
  },
  {
    id: 5,
    name: "settings",
    component: <Setting />,
    exact: "exact",
    path: "/settings",
  },
  {
    id: 6,
    name: "Notifications",
    component: <Setting />,
    exact: "exact",
    path: "/notifications",
  },
  {
    id: 7,
    name: "Subscription",
    component: <Setting />,
    exact: "exact",
    path: "/subscription",
  },
  {
    id: 8,
    name: "referrals",
    component: <Setting />,
    exact: "exact",
    path: "/referrals",
  },



]






export {  AUTH_ROUTES ,APP_Route };