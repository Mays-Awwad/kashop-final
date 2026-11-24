import { Box, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

export default function ReviewItem({review}) {


  return (
    <Paper>
        <Box >
            <Typography >{review.userName}</Typography>
            <Typography > {new Date (review.createdAt).toLocaleDateString()} </Typography>

        </Box>

            <Rating value={review.rating} readOnly />
        
            <Typography>{review.comment}</Typography>
         
    </Paper>
  )
}
