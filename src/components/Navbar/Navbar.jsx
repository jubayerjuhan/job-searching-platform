const Navbar = () => {
  const navbarLinks = [
    { name: "Jobs", link: "/jobs" },
    { name: "Categories", link: "/categories" },
    { name: "Login", link: "/login" },
    { name: "Sign Up", link: "/sign-up" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3 d-flex justify-content-between">
      <div>
        <a className="navbar-brand" href="#">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
