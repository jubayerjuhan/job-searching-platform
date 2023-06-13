import "./login.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div
        className="card"
        style={{
          width: "350px",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: "#f8f9fa",
            borderBottom: "none",
            textAlign: "center",
            padding: "30px",
          }}
        >
          <h3>Login</h3>
        </div>
        <div className="card-body" style={{ padding: "30px" }}>
          <form>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <button type="button" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
