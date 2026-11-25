import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../api/store/useAuthStore'

import { useTranslation } from 'react-i18next';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import i18n from '../../i18next.jsx';



export default function Navbar() {
  const navigate=useNavigate();
  const token=useAuthStore((state)=>state.token);
  const logout=useAuthStore((state)=>state.logout);

  
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' component={Link} to='/' sx={{textDecoration:'none',color:'inherit'}}>
          KAshop
        </Typography>

        <Box sx={{flexGrow:1}}>
          <Button color='inherit'  component={Link} to='/'>Home </Button>
          <Button color='inherit'  component={Link} to='/'>Profile </Button>
          <Button color='inherit'  component={Link} to='/'>Cart </Button>
          {token? <>
          <Button   color='inherit' component={Link} onClick={logout}>Logout</Button>
          </> : <>
          <Button  color='inherit' component={Link} to='/login'>Login</Button>
          <Button  color='inherit' component={Link} to='/register'>Register</Button></>}
        </Box>
      </Toolbar>

    </AppBar>
  )
}
