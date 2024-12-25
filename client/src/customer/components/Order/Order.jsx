import { Grid } from '@mui/material'
import React from 'react'
import OrderCart from './OrderCart'


const orderStatus = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "canclled" },
    { label: "Returned", value: "returned" },
]



const Order = () => {
    return (
        <div>
            <Grid container sx={{ justifyContent: "space-evenly" }}>
                <Grid item xs={10} md={2.5}>
                    <div className='h-auto shadow-lg mt-5 mb-5 bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='uppercase font-semibold'>order status</h1>
                            {
                                orderStatus.map((option) => (
                                    <div className='flex items-center'>
                                        <input defaultValue={option.value} type="checkbox" className='h-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                            {option.label}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid>

                <Grid item md={8} xs={10}>
                    <OrderCart/>
                    <OrderCart/>
                    <OrderCart/>
                    <OrderCart/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order