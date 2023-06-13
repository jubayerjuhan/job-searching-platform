const FeaturedCategories = () => {
  const jobCategories = [
    "Software Development",
    "Marketing",
    "Design",
    "Finance",
    "Sales",
    "Customer Service",
    "Human Resources",
    "Accounting",
    "IT/Technology",
    "Project Management",
    "Healthcare",
    "Education",
    "Engineering",
    "Consulting",
    "Administrative",
    "Hospitality",
    "Retail",
    "Legal",
    "Media/Communications",
    "Art/Creative",
  ];

  const halfIndex = Math.ceil(jobCategories.length / 2);
  const leftCategories = jobCategories.slice(0, halfIndex);
  const rightCategories = jobCategories.slice(halfIndex);

  return (
    <section className="featured-categories sectionPadding">
      <h2 className="mb-4">Featured Categories</h2>
      <div className="row">
        <div className="col-md-6">
          <ul>
            {leftCategories.map((category, index) => (
              <li className="mb-2" key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            {rightCategories.map((category, index) => (
              <li className="mb-2" key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
