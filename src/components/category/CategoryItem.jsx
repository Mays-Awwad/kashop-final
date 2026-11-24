import { Card, CardActionArea, CardContent, Chip, Typography } from '@mui/material'
import React from 'react'

export default function CategoryItem({category}) {

  return (

    <Card>
        <CardActionArea>
            <CardContent sx={{textAlign:'center',py:3}}>
                <Typography variant='h4'>{category.name}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}