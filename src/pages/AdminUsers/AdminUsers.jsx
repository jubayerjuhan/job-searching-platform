import React, { useState, useEffect } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper';
import client from '../../axios/axiosInstance';
import { DataGrid } from '@mui/x-data-grid';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [rows, setRows] = useState([]); // Initialize rows state

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        // Map the users array to create the rows array with updated IDs
        const updatedRows = users.map(user => ({ ...user, id: user._id }));
        setRows(updatedRows); // Update the rows state with the new array
    }, [users]);

    const getUsers = async () => {
        try {
            const { data } = await client.get('/employee/list');
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    const handleDelete = async (id) => {
        console.log(id)
        try {
            const { data } = await client.get(`/employee/delete/${id}`);
            alert("Deleted Successfully!")
            getUsers()
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', flex: 1, editable: true },
        { field: 'industry', headerName: 'Industry', flex: 1 },
        { field: 'skills', headerName: 'Skills', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        {
            field: 'Delete',
            headerName: 'Delete',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <button className='btn btn-danger' onClick={() => handleDelete(params.row.id)}>Delete</button>
                )
            },
        },
    ];

    return (
        <DashboardWrapper>
            <div style={{ height: "80vh", width: '100%', marginTop: "50px" }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
            </div>
        </DashboardWrapper>
    );
};

export default AdminUsers;
