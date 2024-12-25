import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import {  Grid } from '@mui/material'
import DeliveryCard from './DeliveryCard'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20 py-5 lg:py-10'>
            <div className='shadow-md p-5'>
                <h1 className='font-bold text-lg'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='p-5 lg:py-10 shadow-md mt-10 border'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5 mt-10' container>
                <DeliveryCard/>
                <DeliveryCard/>
                <DeliveryCard/>
            </Grid>
        </div>
    )
}

export default OrderDetails