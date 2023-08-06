import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import AuthGuard from "./components/AuthGuard/AuthGuard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <AuthGuard>
              <Homepage />
            </AuthGuard>
          }
          path="/"
        />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/sign-up" />
      </Routes>
    </Router>
  );
}

export default App;
