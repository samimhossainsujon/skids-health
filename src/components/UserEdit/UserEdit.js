import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserEdit = () => {
    const { id } = useParams();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch(`https://skids-health-server-five.vercel.app/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            });
    }, [id]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const HandelToyDataUpdate = (data) => {
        fetch(`https://skids-health-server-samimhossainsujon.vercel.app/updateUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire('User updated successfully', 'User updated successfully', 'success');
                reset();
            })
            .catch(error => console.error(error));
    };

    if (users === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-12 bg-slate-300">
            <form onSubmit={handleSubmit(HandelToyDataUpdate)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered"
                        {...register('name', { required: true })}
                        defaultValue={users.name}
                    />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered"
                        {...register('email', { required: true })}
                        defaultValue={users.email}
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="input input-bordered"
                        {...register('phoneNumber', { required: true })}
                        defaultValue={users.phoneNumber}
                    />
                    {errors.phoneNumber && (
                        <span className="text-red-500">Phone number is required</span>
                    )}
                </div>

                <div className="form-control mt-6 mb-5">
                    <button type="submit" className="btn btn-outline btn-secondary">
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;
