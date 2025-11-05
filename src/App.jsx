import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { AUTH_ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {AUTH_ROUTES?.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
