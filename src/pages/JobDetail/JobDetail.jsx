import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import client from "../../axios/axiosInstance";
import axios from "axios";
import { useSelector } from "react-redux";

const JobDetailPage = () => {
  const { user } = useSelector((state) => state.user);
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      const { data } = await client.get(`/jobs/${id}`);
      console.log(data);
      setJob(data);
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const apiKey = "3f6b137d4865d9f74f06aabff85be867"; // Replace with your ImgBB API key

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("key", apiKey);
      formData.append("image", selectedImage);

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );
        const data = response.data.data;
        setImageUrl(data.url);
        return true;
      } catch (error) {
        console.error("Error uploading image:", error.message);
        return false;
      }
    }
  };

  //   apply to the job
  const applyToTheJob = async () => {
    try {
      const { data } = await client.post("/jobs/apply", {
        jobId: id,
        employeeId: user?._id,
        cvLink: imageUrl,
      });
      console.log(data, "Data");
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };

  //   handle the click after apply button click
  const handleApplyNow = async () => {
    const isImageUploaded = await handleImageUpload();
    if (!isImageUploaded)
      alert("CV Upload Failed. Please Check Your Connection And Try Again");

    applyToTheJob();
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  if (!job) return <>loading...</>;
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <h3 className="mb-4">Job Details</h3>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">{job.role}</h2>
            <p className="card-text">{job.description}</p>

            <hr />

            <div className="mb-3">
              <h5 className="card-subtitle mb-2 text-muted">Working Hours</h5>
              <p className="card-text">{job.workingHours}</p>
            </div>

            <div className="mb-3">
              <h5 className="card-subtitle mb-2 text-muted">Skills</h5>
              <p className="card-text">{job.skills}</p>
            </div>

            <div className="mb-3">
              <h5 className="card-subtitle mb-2 text-muted">Employer</h5>
              <p className="card-text">{job?.employer?.name}</p>
            </div>
            <div className="mb-3">
              <h5 className="card-subtitle mb-2 text-muted">Company</h5>
              <p className="card-text">{job?.employer?.company}</p>
            </div>

            <div className="mb-3">
              <div className="mb-3">
                <label className="form-label">Please Upload Your Resume</label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <button className="btn btn-primary" onClick={handleApplyNow}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
