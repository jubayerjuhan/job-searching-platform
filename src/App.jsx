import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import AuthGuard from "./components/AuthGuard/AuthGuard";
import EmployerSignup from "./pages/EmployerSignup/EmployerSignup";
import SearchPage from "./pages/SearchPage/SearchPage";
import AddJobPage from "./pages/AddJob/AddJob";
import JobDetailPage from "./pages/JobDetail/JobDetail";
import ResumeGenerator from "./pages/ResumeGenerator/ResumeGenerator";
import EmployerLogin from "./pages/EmployerLogin/EmployerLogin";
import ProfilePage from "./pages/ProfilePage/Profile";
import JobsPage from "./pages/JobsPage/JobsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <Homepage />
          }
          path="/"
        />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/sign-up" />
        <Route element={<JobsPage />} path="/jobs" />
        <Route element={<EmployerSignup />} path="/sign-up/employer" />
        <Route element={<EmployerLogin />} path="/login/employer" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<AddJobPage />} path="/add-job" />
        <Route element={<JobDetailPage />} path="/job/:id" />
        <Route element={<ResumeGenerator />} path="/resume-generator" />
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
    </Router>
  );
}

export default App;
