import { Box, Chip, CircularProgress, Container, Typography,Alert } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useCategories from '../../hooks/useCategories';
import CategoryItem from './CategoryItem';

export default function Categories() {

const {data,isLoading,isError,error}=useCategories();

    if(isLoading) return <CircularProgress />

    if(isError) return <Alert severity='error'>{error}</Alert>

  return (
    <Container maxWidth='xl'>
      <Box>
      <Typography component='h1' variant='h4' sx={{mb:3,mt:3}}>Categories</Typography>

       <Box component='div' sx={{display:'grid',gap:2,
        gridTemplateColumns:{
          xs:"repeat(2,1fr)",
          sm:"repeat(3,1fr)",
          md:"repeat(4,1fr)",
        }
       }}>
         {data?.map( (category) =>

        <CategoryItem category={category} />
       )}
       </Box>
    </Box>
    </Container>
  
  )
}

 