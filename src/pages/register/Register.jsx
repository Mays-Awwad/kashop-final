import React, { useState } from 'react'
import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from './../../validations/RegisterSchema';
import * as yup from "yup"



export default function Register() {

  const [ServerError,setServerError]=useState([]);

  const {register,handleSubmit,formState: { errors,isSubmitting }}=useForm({
    resolver: yupResolver(registerSchema),
  });

  const RegisterForm=async (data)=>{
    try{
     const response=await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
     console.log(response);

   }
    catch(err){
      setServerError(err.response.data.errors);
    }
  }
  return (
    <Box component='section' className='registerPage'>
      <Typography component='h1' variant='h3'>Register</Typography>
       
       {ServerError?.length >0 ? ServerError.map( (error)=>
          <Typography color='error'>{error}</Typography>
        ):'' }
        
      <Box component='form' onSubmit={handleSubmit(RegisterForm)} sx={{marginTop:2,display:'flex',flexDirection:'column',gap:2}}>
        <TextField fullWidth  label="username" {...register('userName',{ required: "true" })} variant="outlined"
           error={errors.userName}
           helperText={errors.userName?.message}
        />
        <TextField  fullWidth label="fullname" {...register('fullName',{ required: "true" })} variant="outlined"
           error={errors.fullName}
           helperText={errors.userName?.message}
        />
        <TextField fullWidth label="email" {...register('email',{ required: "true" })} variant="outlined"
           error={errors.email}
           helperText={errors.userName?.message}
        />
        <TextField fullWidth label="password" {...register('password',{ required: "true" })} variant="outlined"
           error={errors.password}
           helperText={errors.userName?.message}
        />
        <TextField fullWidth label="PhoneNumber" {...register('phoneNumber',{ required: "true" })} variant="outlined" 
            error={errors.phoneNumber}
           helperText={errors.userName?.message}
        />
        <Button variant="outlined" type='submit' disabled={isSubmitting} >
          {isSubmitting? <CircularProgress /> : 'Register'}
          </Button>


      </Box>

    </Box>
  )
}
