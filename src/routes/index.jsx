import Login from "../app/auth/login";
import Profile from "../app/auth/profile";
import SignUp from "../app/auth/signUp";
import Charts from "../app/charts";
import Fqa from "../app/faq";
import Home from "../app/home";
import Journal from "../app/journal";
import Setting from "../app/settings";
import Calculator from "../app/calculator";
import ProAnalysis from "../app/proAnalysis";
import AiTools from "../app/aiTools";
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
    name: "Charts",
    component: <Charts />,
    exact: "exact",
    path: "/chart",
  },
  {
    id: 2,
    name: "Journal",
    component: <Journal />,
    exact: "exact",
    path: "/journal",
  },
  {
    id: 3,
    name: "FAQ",
    component: <Fqa />,
    exact: "exact",
    path: "/faq",
  },
  {
    id: 4,
    name: "Settings",
    component: <Setting />,
    exact: "exact",
    path: "/settings/*",
  },
  {
    id: 5,
    name: "Calculator",
    component: <Calculator />,
    exact: "exact",
    path: "/calculator",
  },
   {
    id: 5,
    name: "Pro Analysis",
    component: <ProAnalysis/>,
    exact: "exact",
    path: "/pro-analytics",
  },
  {
    id: 5,
    name: "Ai Tools",
    component: <AiTools/>,
    exact: "exact",
    path: "/ai-tools",
  },
];





export { AUTH_ROUTES, APP_Route };