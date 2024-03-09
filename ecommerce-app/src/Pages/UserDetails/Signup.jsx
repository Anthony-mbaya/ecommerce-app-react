import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Signup(){
    const { register,handleSubmit,formState:{errors}, } = useForm();
    const submitFun =(userData)=> {
        localStorage.setItem(userData.email, JSON.stringify({password:userData.password}));
        console.log(JSON.parse(localStorage.getItem(userData.email)))
    }

    return(
        <>
        <h1>Sign up page</h1>
        <form onSubmit={handleSubmit(submitFun)}>
            <input type='email' {...register('email')} />
            <input type='password' {...register('password')} />
            <input type='submit' />
        </form>
        <Link to="/login">Login</Link>
        </>
    )

}
