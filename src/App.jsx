import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { APP_Route, AUTH_ROUTES } from "./routes";
import { AuthProtectedLayout, ProtectedLayout } from "./routes/routeLayout";
import LandingPage from "./app/landingPage";
import UserProfile from "./app/auth/profile";

function App() {
  return (
    <>
      {/* Global ToastContainer */}
      <ToastContainer />

      <Router>
        <Routes>
          {/* Public Route (Landing Page) */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route element={<AuthProtectedLayout />}>
            {AUTH_ROUTES?.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>

          <Route path="/user-profile" element={<UserProfile />} />

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            {APP_Route?.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
