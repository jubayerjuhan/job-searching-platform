import { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/jobs?query=${keyword}`
  }
  return (
    <div className="heroSection sectionPadding ">
      <h1>Welcome to our Job Search Platform</h1>

      <form className="form-inline my-4 d-flex gap-2" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          className="form-control mr-sm-2 searchInput"
          type="search"
          placeholder="Search Jobs"
          aria-label="Search"
        />
        <button className="btn btn-primary my-2 my-sm-0" type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroSection;
