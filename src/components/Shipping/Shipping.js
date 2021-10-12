import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mt-4 mb-3">Shipping Information</h2>
                <input defaultValue={user.displayName} {...register("Name", {required: true})} className="form-control mb-3"/>
                
                
                <input defaultValue={user.email} {...register("Email", { required: true })} className="form-control mb-3" />
                
                <input placeholder="Enter your Phone number" {...register("Phone", { required: true })} className="form-control mb-3" />
                
                <input placeholder="Enter your City name" {...register("City", { required: true })} className="form-control mb-3" />
                
                <textarea placeholder="Enter your Address" {...register("Address", { required: true })} className="form-control mb-3" />
                
                {errors.Name && <div className="text-danger"><span>This field is required</span><br/></div>}
                
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Shipping;