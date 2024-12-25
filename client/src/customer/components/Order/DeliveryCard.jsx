import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react'
import { deepPurple } from '@mui/material/colors';

const DeliveryCard = () => {
    return (
        <Grid item container className='shadow-md rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Grid item xs={12} md={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                    <div className='space-y-2 ml-5'>
                        <p>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-70 text-xs space-x-5 font-semibold'> <span>Color: Black</span> <span>Size: M</span></p>
                        <p className='opacity-70 text-xs font-semibold'>Seller: Initia</p>
                        <p className='opacity-70 text-xs font-semibold'>1099</p>
                    </div>
                </div>
            </Grid>

            <Grid item className='md:m-0 sm:m-50'>
                <Box sx={{ color: deepPurple[500], display: "flex", alignItems: "center", ml:'85px'}}>
                    <StarBorderIcon sx={{ fontSize: "2.5rem" }} className='px-2 text-5xl' />
                    <span>Rate and Review Product</span>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DeliveryCard