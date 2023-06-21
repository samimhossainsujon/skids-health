import React from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            add user
        </div>
    );
};

export default AddUser;