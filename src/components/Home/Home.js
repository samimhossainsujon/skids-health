import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { QueryClient, QueryClientProvider,  useMutation, useQueryClient } from 'react-query';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';

const Home = () => {
    const axiosSecure = UseAxiosSecure();
    const [users, setUsers] = useState([]);
    const queryClient = useQueryClient();

    const fetchUsers = async () => {
        try {
            const response = await axiosSecure.get('/users');
            const users = response.data;
            setUsers(users);
            console.log(users);
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    const deleteUserMutation = useMutation(Users => {
        return axiosSecure.delete(`/users/${Users._id}`);
    },

        {
            onSettled: () => {
                fetchUsers();
            }
        });

    const handleUserDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "User Data Deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    deleteUserMutation.mutate(user);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.phoneNumber}</th>
                                <th>
                                    <Link to={`/UserDetails/${user._id}`}>
                                        <button className="btn btn-outline btn-secondary">
                                            View Details
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={`/UserEdit/${user._id}`}>
                                        <button className="btn btn-outline btn-secondary">
                                            <AiFillEdit />
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleUserDelete(user)}
                                        className="btn btn-outline btn-secondary"
                                    >
                                        <AiTwotoneDelete />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const queryClient = new QueryClient();

const HomeWithQueryClient = () => (
    <QueryClientProvider client={queryClient}>
        <Home />
    </QueryClientProvider>
);

export default HomeWithQueryClient;
