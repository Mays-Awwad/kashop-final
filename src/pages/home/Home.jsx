import React from 'react'
import  Typography  from '@mui/material/Typography'
import Categories from '../../components/category/Categories'
import Products from '../../components/product/Products'
import { Alert } from '@mui/material';
import useAuthStore from '../../api/store/useAuthStore';

export default function Home() {
  const token=useAuthStore((state)=>state.token);
  return (
    <div>
      {token? <Alert severity='success'>Welcome Back!</Alert>:''}
        <Categories />
        <Products />
    </div>
  )
}
