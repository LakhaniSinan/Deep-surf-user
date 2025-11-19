import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { APP_Route, AUTH_ROUTES } from "./routes";

function App() {
  return (
    <>
      {/* Global ToastContainer */}
      <ToastContainer />

      <Router>
        <Routes>
          {/* Auth routes */}
          {AUTH_ROUTES?.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}

          {/* App routes */}
          {APP_Route?.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
