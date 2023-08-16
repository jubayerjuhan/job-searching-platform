import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import client from '../../axios/axiosInstance';
import JobCard from "../../components/JobCard/JobCard"
import { useSearchParams } from "react-router-dom"

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); // Separate state for filtered jobs

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
        try {
            const { data } = await client.get("/jobs");
            setJobs(data);
            setFilteredJobs(data); // Initialize filtered jobs with all jobs
        } catch (error) {
            alert(error.response.data.message || error.message);
        }
    };

    useEffect(() => {
        if(!query) return
        // Filter jobs based on the search query
        const newFilteredJobs = jobs.filter(job =>
            job.role.toLowerCase().includes(query)
        );
        setFilteredJobs(newFilteredJobs);
    }, [query, jobs]); // Include 'jobs' as a dependency

    return (
        <div>
            <Navbar></Navbar>
            {query && (
                <p className='p-4'>Showing Result For "{query}"</p>
            )}
            <div className="container mt-4">
                <div className="d-flex gap-4">
                    {filteredJobs.map(job => (
                        <JobCard job={job} key={job.role} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobsPage;
