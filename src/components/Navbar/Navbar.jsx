import { useSelector } from "react-redux";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const navbarLinks = [
    { name: "Jobs", link: "/jobs" },
    { name: "Make Resume", link: "/resume-generator" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3 d-flex justify-content-between">
      <div>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
      </div>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navbarLinks.map((link, index) => (
              <a className="nav-item nav-link" href={link.link} key={index}>
                {link.name}
              </a>
            ))}
          </div>
          {loggedIn ? (
            <div className="d-flex gap-2">
              <button
                className="btn btn-info"
                onClick={() => (window.location.href = "/profile")}
              >
                Profile
              </button>
              {user.role === "employer" && <button
                className="btn btn-info"
                onClick={() => (window.location.href = "/add-job")}
              >
                Add Job
              </button>}
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <button
                className="btn btn-info"
                onClick={() => (window.location.href = "/sign-up/employer")}
              >
                Sign Up as Employer
              </button>
              <button
                className="btn btn-info"
                onClick={() => (window.location.href = "/sign-up")}
              >
                Sign Up
              </button>
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "/login/employer")}
              >
                Login as Employer
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
