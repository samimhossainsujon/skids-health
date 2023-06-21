import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const AddUser = () => {
  const [value, setValue] = useState();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-12 bg-slate-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            {...register('name', { required: true })}
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
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            {...register('phoneNumber', { required: true })}
            value={value}
            onChange={setValue}
          />
          {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
        </div>

        <div className="form-control mt-6 mb-5">
          <button type="submit" className="btn btn-outline btn-secondary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
