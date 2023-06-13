import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection sectionPadding ">
      <h1>Welcome to our Job Search Platform</h1>

      <form className="form-inline my-4 d-flex gap-2">
        <input
          className="form-control mr-sm-2 searchInput"
          type="search"
          placeholder="Search Jobs"
          aria-label="Search"
        />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroSection;
