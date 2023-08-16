import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobCard from "../../components/JobCard/JobCard"
import Navbar from '../../components/Navbar/Navbar';
import client from '../../axios/axiosInstance';
import { useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await client.get(`/myjobs/${user._id}`)
    setJobs(data)
  }

  return (
    <>
      <Navbar></Navbar>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Profile Information</h4>
                </div>
                <div className="card-body">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  {user.role === 'employer' && (
                    <p><strong>Company:</strong> {user.company}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* {user.role === "employer"()} */}
      <div className='p-4'>
        <h4 className='mb-4'>My Jobs</h4>
        {jobs?.map((job, index) => (
          <JobCard job={job} key={index}></JobCard>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
