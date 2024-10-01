import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCrad = () => {
  return (
    <div>
        <Grid container className='' spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:50 ,height:50,bgcolor:"#9155fd"}}></Avatar>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ram</p>
                        <p className='opacity-70'>April 5, 2024</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati labore incidunt voluptatem praesentium ducimus quasi quidem amet asperiores! Eius.</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCrad