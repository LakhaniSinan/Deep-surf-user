import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store"; // ya jahan actual store hai

 export const ProtectedLayout = () => {
  const { user } = useAuthStore();

  if (user === null) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export const AuthProtectedLayout = () => {
  const { user } = useAuthStore();
  console.log("fghefgehfef", user);
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

