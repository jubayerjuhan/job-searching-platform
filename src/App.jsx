import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
