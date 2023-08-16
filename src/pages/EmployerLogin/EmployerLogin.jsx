import { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import client from "../../axios/axiosInstance";

const EmployerLogin = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "USER_LOGIN_PENDING" });
    try {
      const { data } = await client.post("/employers/login", loginData);
      console.log(data, "data");
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };
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
          <h3>Employer Login</h3>
        </div>
        <div className="card-body" style={{ padding: "30px" }}>
          <form>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                style={{ borderRadius: "5px" }}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
