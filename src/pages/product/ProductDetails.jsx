import React from 'react'

import useProductDetails from './../../hooks/useProductDetails';
import { CircularProgress, Typography, Box, Button,Alert, Card, CardMedia, Rating, Chip, Divider } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ReviewItem from '../../components/ReviewItem';
import useAuthStore from '../../api/store/useAuthStore';
import { Bounce, toast } from 'react-toastify';

export default function ProductDetails() {
  const navigate=useNavigate();
  const token=useAuthStore((state)=>state.token);

    const {id}=useParams();
    console.log(id);

    const {data,isLoading,isError,error}=useProductDetails(id);
    /*const {mutate:addToCart,isPending:addToCartPending}=useAddToCart()*/
    console.log(data);
    /*const {mutate:addToCart}=useAddToCart();*/
    if(isLoading) return <CircularProgress />
    if(isError) return <Alert severity='error'>Failed to load product details</Alert>

     const inStock=data.quantity > 0;

     const handleAddToCart=()=>{
      if(!token){
        navigate('/login');
        return
      }

     }

  return (
    <>
    <Box component ={'div'} sx={{mt:4,display:'grid',gridTemplateColumns:{
         xs:'1fr',md:'1fr 1fr' }, gap:4}}>

      <Card>
          <CardMedia
          component={'img'}
        sx={{ maxHeight:400,objectFit:'contain' }}
        image={data?.image}
      />
      </Card>

      <Box sx={{display:'flex',flexDirection: 'column',gap:2}}>
          <Typography>{data?.name}</Typography>
          <Rating value={data?.rate} readOnly />
          <Typography variant={'h4'} color='primary'>${data?.price}</Typography>

          <Chip label={inStock?'In Stock' :'Out Of Stock' }
          color={inStock  ?"success" : "error"} 
          sx={{maxWidth:'25%'}}
           ></Chip>

           <Typography>{data.description}</Typography>
           <Button variant='contained' disabled={!inStock} sx={{maxWidth:'25%',borderRadius:2}}
             onClick={handleAddToCart}
            > Add To Cart</Button>
      </Box>

      </Box>
      <Divider sx={{mb:3,mt:5,borderBottomWidth:3}} />

       <Box sx={{p:2,mb:3,display:'grid',gridTemplateColumns:{
            xs:'1fr',md:'1fr 1fr'
        },gap:2,alignItems: 'center'}}>
               {data.reviews?.map((review, index) => (
                   <ReviewItem key={review.id ?? index} review={review} />
                    ))}
       </Box>
      
    </>
    
      
  )
}