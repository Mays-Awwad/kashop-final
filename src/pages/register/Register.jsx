import React, { useState } from 'react'
import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from './../../validations/RegisterSchema';
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom';



export default function Register() {
  const navigate= useNavigate();

  const [ServerError,setServerError]=useState([]); // to know the error from the backend
  const [success,setSuccess]=useState(false);

  const {register,handleSubmit,formState: { errors,isSubmitting }}=useForm({
    resolver: yupResolver(registerSchema),
   // mode:'onChange',
   mode:'onBlur'
  });

  const RegisterForm=async (data)=>{

    try{
      console.log(data);
     /*const response=await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);*/
     const response=await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,data);
     console.log(response);
     setSuccess(true);
     navigate('/login');
   }
    catch(err){
      console.log(err.response.data.errors)
      setServerError(err.response.data.errors);
    }
  }
  
  return (
   <Container maxWidth='sm' sx={{mt:10}}>
       <Box sx={{bgcolor:'white',boxShadow:3,p:4,borderRadius:2}} component='section' className='registerPage'>
      <Typography component='h1' variant='h3' sx={{textAlign:'center'}}>Register</Typography>
        
       {ServerError?.length >0 ? ServerError.map( (error)=>
          <Typography color='error'>{error}</Typography>
        ):'' }
        
        
      <Box component='form' onSubmit={handleSubmit(RegisterForm)} sx={{marginTop:4,display:'flex',flexDirection:'column',gap:3}}>
        <TextField fullWidth margin='normal' label="username" {...register('userName')} variant="outlined"
           error={errors.userName}
           helperText={errors.userName?.message}
           
        />
        <TextField  fullWidth margin='normal' label="fullname" {...register('fullName')} variant="outlined"
           error={errors.fullName}
           helperText={errors.fullName?.message}
        />
        <TextField fullWidth margin='normal' label="email" {...register('email')} variant="outlined"
           error={errors.email}
           helperText={errors.email?.message}
        />
        <TextField fullWidth margin='normal' type='password' label="password" {...register('password')} variant="outlined"
           error={errors.password}
           helperText={errors.password?.message}
        />
        <TextField fullWidth margin='normal' label="PhoneNumber" {...register('phoneNumber')} variant="outlined" 
            error={errors.phoneNumber}
           helperText={errors.phoneNumber?.message}
        />
        <Button variant="outlined" type='submit' disabled={isSubmitting} >
          {isSubmitting? <CircularProgress /> : 'Register'}
          </Button>

          <Typography variant='body1' sx={{mt:4,textAlign:'center'}}>Already have an account?
              <Link to='/login'>Login</Link>
          </Typography>
          
      </Box>

    </Box>

   </Container>
  )
}
