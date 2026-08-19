import React from 'react'
import  Typography  from '@mui/material/Typography'

export default function Home() {
  return (
    <div>
      <Typography component='h1' variant='h3' sx={{backgroundColor:'green',fontSize:40}}>Hello! World</Typography>
      <Typography component='p' variant='body1'>Hello! World</Typography>
      <Typography component='p' variant='body2'>Hello! World</Typography>
    </div>
  )
}
