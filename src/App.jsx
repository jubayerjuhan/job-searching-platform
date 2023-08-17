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
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import AdminEmployer from "./pages/AdminEmployer/AdminEmployer";
import AdminJob from "./pages/AdminJob/AdminJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/sign-up" />
        <Route element={<JobsPage />} path="/jobs" />
        <Route element={<EmployerSignup />} path="/sign-up/employer" />
        <Route element={<EmployerLogin />} path="/login/employer" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<AddJobPage />} path="/add-job" />
        <Route
          element={
            <AuthGuard>
              <JobDetailPage />
            </AuthGuard>
          }
          path="/job/:id"
        />
        <Route
          element={
            <AuthGuard>
              <JobDetailPage applicantPage />
            </AuthGuard>
          }
          path="/job/applicants/:id"
        />
        <Route element={<ResumeGenerator />} path="/resume-generator" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<AdminUsers />} path="/admin/employee" />
        <Route element={<AdminUsers />} path="/admin  " />
        <Route element={<AdminEmployer />} path="/admin/employer" />
        <Route element={<AdminJob />} path="/admin/jobs" />
      </Routes>
    </Router>
  );
}

export default App;
