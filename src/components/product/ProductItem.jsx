
import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography} from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductItem({product}) {

    
  return (
    <Card>
         <CardActionArea component={Link} to={`/product/${product.id}`}>
            <CardMedia
                component='img'
                 image={product.image}
                sx={{width:200}}
                alt={product.name}
            ></CardMedia>

        <CardContent>
                <Typography >{product.name}</Typography>
                
                <Typography component='span' variant='h6' color='primary'>{product.price}</Typography>
                <Typography>{product.id}</Typography>
                <Rating value={product.rating} readOnly />
        </CardContent>
         </CardActionArea>
                         
    </Card>
  )
}