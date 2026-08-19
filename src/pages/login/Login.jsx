import React, { useState } from 'react'
import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginSchema } from '../../validations/LoginSchema';



export default function Login() {

  const [ServerError,setServerError]=useState([]);

  const {register,handleSubmit,formState: { errors,isSubmitting }}=useForm({
    resolver: yupResolver(loginSchema) 
  });

  const LoginForm=async (data)=>{
    try{
     const response=await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`,data);
     console.log(response);
     console.log(response.data.accessToken);
     localStorage.setItem('accessToken',response.data.accessToken);
   }
    catch(err){
      setServerError(err.response.data.errors);
    }
  }
  return (
    <Box component='section' className='LoginPage'>
      <Typography component='h1' variant='h3'>Login</Typography>
       
       {ServerError?.length >0 ? ServerError.map( (error)=>
          <Typography color='error'>{error}</Typography>
        ):'' }
      <Box component='form' onSubmit={handleSubmit(LoginForm)} sx={{marginTop:2,display:'flex',flexDirection:'column',gap:2}}>
        <TextField fullWidth  label="email" {...register('email',{ required: true })} variant="outlined"
           error={errors.userName}
           helperText={errors.userName?.message}
        />
        <TextField  fullWidth label="password" {...register('password',{ required: true })} variant="outlined"
           error={errors.fullName}
           helperText={errors.userName?.message}
        />

        <Button variant="outlined" type='submit' disabled={isSubmitting} >
          {isSubmitting? <CircularProgress /> : 'Login'}
          </Button>


      </Box>

    </Box>
  )
}
