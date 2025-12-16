import Login from "../app/auth/login";
import Profile from "../app/auth/profile";
import SignUp from "../app/auth/signUp";
import Charts from "../app/charts";
import Fqa from "../app/settings/faq";
import Home from "../app/home";
import Journal from "../app/journal";
import Setting from "../app/settings";
import Calculator from "../app/calculator";
import ProAnalysis from "../app/proAnalysis";
import AiTools from "../app/aiTools";
import MarketOutLook from "../app/marketOutLook";
import VerficationProcess from "../app/auth/otpVerfication";
import ForGetPassword from "../app/auth/forgotPassword";
import SetNewPassword from "../app/auth/setPassword";
import ForgetVerfication from "../app/auth/loginOtpVerification";
import SetUserProfile from "../app/auth/profile";
import UserProfile from "../app/auth/profile";
import TermAndCondition from "../app/termsAndConditions";
import MyLoginPage from "../app/auth/login/myLoginPage";

const AUTH_ROUTES = [

  {
    id: 1,
    name: "Signup",
    path: "/signup",
    component: <SignUp />,
  },

  {
    id: 2,
    name: "Login",
    path: "/login",
    component: <Login />,
  },

  {
    id: 1,
    name: "myLoginPag",
    path: "/my-login-page-url",
    component: <MyLoginPage />,
  },


  {
    id: 4,
    name: "VerficationProcess",
    component: <VerficationProcess />,
    exact: "exact",
    path: "/verification",
  },
  {
    id: 5,
    name: "ForGetPassword",
    component: <ForGetPassword />,
    exact: "exact",
    path: "/forgot-password",
  },
  {
    id: 6,
    name: "ForgetVerfication",
    component: <ForgetVerfication />,
    exact: "exact",
    path: "/forget-verfication",
  },

  {
    id: 7,
    name: "SetNewPassword",
    component: <SetNewPassword />,
    exact: "exact",
    path: "/new-password",
  },
  {
    id: 7,
    name: "TermAndCondition",
    component: <TermAndCondition />,
    exact: "exact",
    path: "/term-and-condition",
  },
];

const APP_Route = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    exact: "exact",
    path: "/dashboard",
  },

  {
    id: 2,
    name: "Charts",
    component: <Charts />,
    exact: "exact",
    path: "/chart",
  },
  {
    id: 3,
    name: "Journal",
    component: <Journal />,
    exact: "exact",
    path: "/journal",
  },
  {
    id: 4,
    name: "Fqa",
    component: <Fqa />,
    exact: "exact",
    path: "/faq",
  },
  {
    id: 5,
    name: "Settings",
    component: <Setting />,
    exact: "exact",
    path: "/settings/*",
  },
  {
    id: 6,
    name: "Calculator",
    component: <Calculator />,
    exact: "exact",
    path: "/calculator",
  },
  {
    id: 7,
    name: "Pro Analysis",
    component: <ProAnalysis />,
    exact: "exact",
    path: "/pro-analytics",
  },
  {
    id: 8,
    name: "Ai Tools",
    component: <AiTools />,
    exact: "exact",
    path: "/ai-tools",
  },
  {
    id: 9,
    name: "MarketOutLook",
    component: <MarketOutLook />,
    exact: "exact",
    path: "/market-outlook",
  },
];

export { AUTH_ROUTES, APP_Route };
