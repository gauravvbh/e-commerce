import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate("/account/order/5")} className='p-5 mt-5 cursor-pointer shadow-md hover:shadow-xl'>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={6}>
                    <div className='flex'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {
                        true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                                <span className='text-sm'>Delivered on March 03</span>
                            </p>
                                <span className='text-xs opacity-90'>Your Item has been Delivered</span>
                        </div>

                    }
                    {
                        false &&
                        <p>
                            <span>Expected Delivery on Mar 03</span>
                        </p>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCart