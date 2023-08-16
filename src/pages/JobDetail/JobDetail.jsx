import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import client from '../../axios/axiosInstance';

const JobDetailPage = () => {
    const [job, setJob] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getJob()
    }, [])

    const getJob = async () => {
        try {
            const { data } = await client.get(`/jobs/${id}`);
            console.log(data)
            setJob(data)
        } catch (error) {
            alert(error.response.data.message || error.message);
        }
    }


    const [applicantName, setApplicantName] = useState('');

    const handleApplyNow = () => {
        // You can implement the logic for applying here, like sending a request to a backend
        console.log(`Applying as ${applicantName}`);
    };

    if (!job) return <>loading...</>
    return (
        <>
            <Navbar></Navbar>
            <div className="container mt-5">
                <h3 className='mb-4'>Job Details</h3>
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
                            <p className="card-text">{job.employer.name}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Company</h5>
                            <p className="card-text">{job.employer.company}</p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="applicantName" className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="applicantName"
                                value={applicantName}
                                onChange={(e) => setApplicantName(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={handleApplyNow}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default JobDetailPage;
