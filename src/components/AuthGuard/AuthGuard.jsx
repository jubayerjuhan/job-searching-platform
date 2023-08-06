import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.user);
  if (!loggedIn) return <Navigate to={"/login"} />;
  return children;
};

export default AuthGuard;
