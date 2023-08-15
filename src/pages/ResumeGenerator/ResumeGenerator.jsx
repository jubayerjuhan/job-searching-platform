import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import './resumegen.css';
import Navbar from '../../components/Navbar/Navbar';

const ResumeGenerator = () => {
    const resumeRef = useRef(null);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [summary, setSummary] = useState('');
    const [skills, setSkills] = useState('');
    const [experienceRole, setexperienceRole] = useState('');
    const [experienceCompany, setexperienceCompany] = useState('');
    const [experienceDescription, setexperienceDescription] = useState('');
    const [educationUniversity, setEducationUniversity] = useState('');
    const [educationDegree, setEducationDegree] = useState('');
    const [strengths, setStrengths] = useState('');

    const generateImage = () => {
        const resumeElement = resumeRef.current;

        // Set the width and height to match A4 paper size (in pixels)
        const width = 595.28; // A4 width in pixels
        const height = 841.89; // A4 height in pixels

        html2canvas(resumeElement, { width, height }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'resume.png';
            link.click();
        });
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="container resume-container">

                <div className="container mt-4">
                    <h2 className="text-primary mb-4">Enter Your Resume Details</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input
                                type="text"
                                className="form-control"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Summary</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Skills (comma separated)</label>
                            <input
                                type="text"
                                className="form-control"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Experience Role</label>
                            <input
                                type="text"
                                className="form-control"
                                value={experienceRole}
                                onChange={(e) => setexperienceRole(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Experience Company</label>
                            <input
                                type="text"
                                className="form-control"
                                value={experienceCompany}
                                onChange={(e) => setexperienceCompany(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Experience Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={experienceDescription}
                                onChange={(e) => setexperienceDescription(e.target.value)}
                            />
                        </div>


                        <div className="form-group">
                            <label>Education Degree</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={educationDegree}
                                onChange={(e) => setEducationDegree(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Education University</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={educationUniversity}
                                onChange={(e) => setEducationUniversity(e.target.value)}
                            ></textarea>
                        </div>
                        {/* <div className="form-group">
            <label>Strengths (comma separated)</label>
            <input
                type="text"
                className="form-control"
                value={strengths}
                onChange={(e) => setStrengths(e.target.value)}
            />
        </div> */}
                    </form>
                </div>

                <div className="col-lg-4 text-lg-right mb-4 ">
                    <button className="btn btn-primary btn-lg" onClick={generateImage}>
                        Generate Image
                    </button>
                </div>
                <div ref={resumeRef} className="resume-content bg-white p-4 shadow-sm">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="display-4 text-primary">{name}</h1>
                            <p className="lead text-muted">{role}</p>
                        </div>

                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-primary">Summary</h2>
                            <p>{summary}</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-primary">Skills</h2>
                            <ul>
                                {skills.split(',').map((skill, index) => (
                                    <li key={index}>{skill.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-primary">Experiences</h2>
                            <p><strong>{experienceRole}</strong> | {experienceCompany}</p>
                            <p>{experienceDescription}</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-primary">Education</h2>
                            <p><strong>{educationDegree}</strong> | {educationUniversity}</p>
                        </div>
                    </div>

                    {/* <hr /> */}


                </div>
            </div>
        </>

    );
};

export default ResumeGenerator;
