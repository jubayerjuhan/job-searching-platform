import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import client from '../../axios/axiosInstance';
import { useSelector } from 'react-redux';

const AddJobPage = () => {
    const { user } = useSelector((state) => state.user)
    const initialFields = [
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'workingHours', label: 'Working Hours', type: 'text' },
        { name: 'skills', label: 'Skills', type: 'text' },
    ];

    const [fields, setFields] = useState(initialFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {}));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await client.post("/jobs", { ...fields, employer: user?._id });
            console.log(data, "data");
            alert("Job Post Successfully")
        } catch (error) {
            alert(error.response.data.message || error.message);
        }

    };

    const handleFieldChange = (e, fieldName) => {
        const { value } = e.target;
        setFields((prevFields) => ({ ...prevFields, [fieldName]: value }));
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4">Add a New Job</h2>
                <form onSubmit={handleSubmit}>
                    {initialFields.map((field) => (
                        <div className="mb-3" key={field.name}>
                            <label htmlFor={field.name} className="form-label">{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    className="form-control"
                                    id={field.name}
                                    value={fields[field.name]}
                                    onChange={(e) => handleFieldChange(e, field.name)}
                                    required
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    className="form-control"
                                    id={field.name}
                                    value={fields[field.name]}
                                    onChange={(e) => handleFieldChange(e, field.name)}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary">Add Job</button>
                </form>
            </div>
        </>
    );
};

export default AddJobPage;
