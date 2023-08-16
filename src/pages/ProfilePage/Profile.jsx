import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';

const ProfilePage = () => {
  const {user} = useSelector((state) => state.user)
  
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
        </>
  );
};

export default ProfilePage;
