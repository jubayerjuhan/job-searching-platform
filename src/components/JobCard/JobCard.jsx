import "./jobCard.css";

const JobCard = ({ job, employeeVersion }) => {
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
          <h5 className="card-title mb-3">{job.role}</h5>
          <h6 className="card-subtitle mb-4 text-muted">
            Work Hour : {job.workingHours}
          </h6>
          <h6 className="card-subtitle mb-4 text-muted">
            Company : {job?.employer?.company}
          </h6>
          <h6 className="card-subtitle mb-4 text-muted">
            Skills : {job.skills}
          </h6>
          <p className="card-text mb-4">
            {truncateDescription(job.description, 8)}
          </p>
          <div className="d-flex justify-content-between">
            {employeeVersion ? (
              <button
                type="button"
                className="btn btn-info"
                onClick={() =>
                  (window.location.href = `/job/applicants/${job._id}`)
                }
              >
                Show Applicants
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => (window.location.href = `/job/${job._id}`)}
              >
                Apply Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
