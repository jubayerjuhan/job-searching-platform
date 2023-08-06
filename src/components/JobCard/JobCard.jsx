import "./jobCard.css";

const JobCard = ({ job }) => {
  const truncateDescription = (description, wordCount) => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, wordCount);
    const truncatedDescription = truncatedWords.join(" ");

    return `${truncatedDescription}...`;
  };
  return (
    <div className="jobcard">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">{job.title}</h5>
          <h6 className="card-subtitle mb-4 text-muted">{job.subtitle}</h6>
          <p className="card-text">{truncateDescription(job.description, 8)}</p>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary">
              Apply Now
            </button>
            <button type="button" className="btn btn-secondary">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
