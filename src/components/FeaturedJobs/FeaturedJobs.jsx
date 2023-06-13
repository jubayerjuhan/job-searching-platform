import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Web Developer",
      subtitle: "ABC Company",
      description:
        "Responsible for designing and developing web applications using HTML, CSS, and JavaScript.",
    },
    {
      title: "Software Engineer",
      subtitle: "XYZ Tech",
      description:
        "Develop and maintain software applications, write clean and efficient code.",
    },
    {
      title: "Graphic Designer",
      subtitle: "Design Studio",
      description:
        "Create visual concepts, illustrations, and designs for various projects.",
    },
    {
      title: "Marketing Manager",
      subtitle: "Marketing Agency",
      description:
        "Plan and execute marketing strategies to promote products and increase brand awareness.",
    },
    {
      title: "Data Analyst",
      subtitle: "Data Analytics Inc.",
      description:
        "Analyze large datasets, generate reports, and provide insights for decision-making.",
    },
    {
      title: "Sales Executive",
      subtitle: "Sales Company",
      description:
        "Identify potential clients, negotiate deals, and maintain customer relationships.",
    },
    {
      title: "Content Writer",
      subtitle: "Content Creation Co.",
      description:
        "Produce high-quality written content for websites, blogs, and social media platforms.",
    },
    {
      title: "Financial Analyst",
      subtitle: "Finance Firm",
      description:
        "Analyze financial data, prepare reports, and provide financial recommendations.",
    },
    {
      title: "Human Resources Manager",
      subtitle: "HR Solutions Ltd.",
      description:
        "Oversee HR operations, manage employee relations, and implement HR policies.",
    },
    {
      title: "Project Manager",
      subtitle: "Project Management Inc.",
      description:
        "Lead and coordinate project teams, ensure successful project delivery.",
    },
  ];

  return (
    <section className="featured-jobs sectionPadding ">
      <h2 className="mb-4">Featured Jobs</h2>
      <div className="d-flex gap-4 flex-wrap">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
