import Login from "../app/auth/login";
import Profile from "../app/auth/profile";
import SignUp from "../app/auth/signUp";

const AUTH_ROUTES = [
  {
    id: 1,
    name: "Login",
    path: "/login",
    component: <Login />,
  },
  {
    id: 2,
    name: "Signup",
    path: "/signup",
    component: <SignUp />,
  },
  {
    id: 3,
    name: "Profile",
    component: <Profile />,
    exact: "exact",
    path: "/profile",
  },

];


export {  AUTH_ROUTES };