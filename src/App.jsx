import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
