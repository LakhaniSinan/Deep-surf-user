import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { APP_Route, AUTH_ROUTES } from "./routes";
import SignUp from "./app/auth/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {AUTH_ROUTES?.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Routes>
        {APP_Route?.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
