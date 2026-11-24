
import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Card, CardContent, CardMedia, CircularProgress, Typography,Box,Grid,Alert} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductItem from './ProductItem';


export default function Products() {
  /*const {t}=useTranslation();*/
    const{data,isLoading,isError,error}=useProducts();

    if (isLoading) return <CircularProgress />

    if(isError) return <Alert severity="error">Failed to load Products</Alert>
   



  return (
    <Box className='products' component='section'>
       <Typography component='h1' variant='h3' sx={{mb:3,mt:4}}>Products</Typography>

       <Grid container spacing={{xs:2,md:3}}>
            {data.map((product)=>{
              
                return <Grid item size={{xs:12,sm:6,md:4}}>
                   <ProductItem product={product} /> 
                </Grid>
            } )}
       </Grid>
    </Box>
  )
}