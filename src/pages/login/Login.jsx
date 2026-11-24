import React, { useState } from 'react'
import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import { Button, CircularProgress, Container, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginSchema } from '../../validations/LoginSchema';
import useAuthStore from '../../api/store/useAuthStore';
import { useNavigate,Link } from 'react-router-dom';



export default function Login() {
  const navigate=useNavigate();
 const login=useAuthStore((state)=>state.login)

  const [ServerError,setServerError]=useState([]);

  const {register,handleSubmit,formState: { errors,isSubmitting }}=useForm({
    resolver: yupResolver(loginSchema),
    mode:'onBlur'
  });

  const LoginForm=async (data)=>{
    try{
     const response=await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`,data);
     console.log(response);
     console.log(response.data.accessToken);
     login(response.data.accessToken);
     /*
      localStorage.setItem('token',response.data.accessToken);
     /* setToken(response.data.accessToken);*/
      navigate('/');
   }
    catch(err){
      setServerError(err.response.data.errors);
    }
  }

  return (
   <Container >
    <Box component='section' className='LoginPage'>
      <Typography component='h1' variant='h3' sx={{textAlign:'center',mt:3}}>Login</Typography>
       
       {ServerError?.length >0 ? ServerError.map( (error)=>
          <Typography color='error'>{error}</Typography>
        ):'' }
      <Box component='form' onSubmit={handleSubmit(LoginForm)} sx={{marginTop:2,display:'flex',flexDirection:'column',gap:2}}>
        <TextField fullWidth  label="email" {...register('email',{ required: true })} variant="outlined"
           error={errors.userName}
           helperText={errors.userName?.message}
        />
        <TextField  fullWidth label="password" type='password' {...register('password',{ required: true })} variant="outlined"
           error={errors.fullName}
           helperText={errors.userName?.message}
        />

        <Button variant="outlined" type='submit' disabled={isSubmitting} >
          {isSubmitting? <CircularProgress /> : 'Login'}
          </Button>

          <Typography variant='body1' sx={{mt:4,textAlign:'center'}}>Don't have an account?
              <Link to='/register'>Register</Link>
          </Typography>

           <Typography variant='body1' sx={{mt:4,textAlign:'center'}}>Forget Your password?
              <Link to='/'></Link>
          </Typography>


      </Box>

    </Box>
   </Container>
  )
}
