import { useState } from "react";
import Loading from "../../components/Spinner/Spinner";
import "./signup.css";
import client from "../../axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux";

const allSkills = [
  "Web Development",
  "Mobile App Development",
  "Database Management",
  "Financial Analysis",
  "Investment Banking",
  "Accounting",
  "Medical Coding",
  "Nursing",
  "Health Informatics",
  "Curriculum Design",
  "Online Teaching",
  "Educational Technology",
  "Digital Marketing",
  "Content Creation",
  "Market Research",
  "Video Production",
  "Graphic Design",
  "Music Composition",
  "Visual Merchandising",
  "Inventory Management",
  "Customer Service",
  "Hotel Management",
  "Event Planning",
  "Culinary Arts",
  "Automotive Repair",
  "Vehicle Design",
  "Auto Electronics",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
];

const allIndustries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Marketing",
  "Entertainment",
  "Retail",
  "Hospitality",
  "Automotive",
  "Engineering",
];

const fields = [
  { id: "name", type: "text", placeholder: "Enter your name" },
  {
    id: "industry",
    type: "select",
    placeholder: "Enter your industry",
    options: allIndustries,
  },
  {
    id: "skills",
    type: "select",
    placeholder: "Enter your skill",
    options: allSkills,
  },
  { id: "email", type: "email", placeholder: "Enter your email" },
  { id: "phone", type: "text", placeholder: "Enter your phone number" },
  { id: "password", type: "password", placeholder: "Enter your password" },
];

const SignupPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  // state for collecting the data from fields
  const [signupData, setSignupData] = useState({});
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "USER_LOGIN_PENDING" });
    try {
      const { data } = await client.post("/employee/create", signupData);
      console.log(data, "data");
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data?.employee });
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };

  return (
    <div className="signup">
      <Loading loading={loading} />
      <div className="card">
        <div className="card-header py-4">
          <h3 className="text-center">Sign Up</h3>
        </div>
        <div className="card-body">
          <form>
            {fields.map((field, index) => {
              if (field.type === "select")
                return (
                  <div className="form-group mt-2" key={field.id}>
                    <label htmlFor={field.id}>
                      {field.id.charAt(0).toUpperCase() + field.id.slice(1)}
                    </label>
                    <select
                      className="form-control"
                      id={field.id}
                      key={index}
                      onChange={handleChange}
                    >
                      <option value="">Select an industry</option>
                      {field.options?.map((industry, index) => (
                        <option key={index} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              return (
                <div className="form-group mt-2" key={field.id}>
                  <label htmlFor={field.id}>
                    {field.id.charAt(0).toUpperCase() + field.id.slice(1)}
                  </label>
                  <input
                    onChange={handleChange}
                    type={field.type}
                    className="form-control"
                    id={field.id}
                    placeholder={field.placeholder}
                  />
                </div>
              );
            })}
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary mt-4 btn-block w-100"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
