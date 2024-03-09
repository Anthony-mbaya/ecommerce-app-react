import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

export const Login = () => {
    const { register,handleSubmit,formState:{errors} } = useForm();
    
    const submitFun =(userData)=> {
      const getdata = JSON.parse(localStorage.getItem(userData.email));
      if(getdata){
        if(getdata.password === userData.password){
          alert('logged in')
        }else{
          alert('email or password not match')
        }
      }else{
        alert('incorrect entry')
      }
    }
  return(
    <>
    <h1>Login page</h1>
    <form onSubmit={handleSubmit(submitFun)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />
        <input type="submit" />
    </form>
    <Link to="/signup">Sign Up</Link>
    </>
  )
};
