import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Divider, Typography } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../Redux/Order/Action'
import { createPayment } from '../../../Redux/Payment/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const order = useSelector(state => state.order.order);


    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
        return <Typography>Loading order details...</Typography>;
    }


    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [orderId])

    const handleCheckout = () => {
        dispatch(createPayment(orderId));
    }

    return (
        <div>
            <div className='p-5 shadow-lg rounder-md border'>
                <AddressCard details={order?.shippingAddress} />
            </div>
            <div>
                <div className=' mt-10 lg:grid grid-cols-3 relative'>
                    <div className='col-span-2'>
                        {
                            order?.orderItems.map((item) => (
                                <CartItem key={item._id} item={item} />
                            ))
                        }
                    </div>

                    <div className='px-5 sticky top-0'>
                        <div className='shadow-2xl p-5 rounded-2xl overflow-hidden'>
                            <p className='uppercase font-bold opacity-60 pb-5'>price details</p>
                            <Divider />
                            <div className='space-y-3 font-semibold mb-10'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>₹{order?.totalPrice}</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-₹{order?.totalPrice - order?.totalDiscountedPrice}</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black font-bold'>
                                    <span>Total Amount</span>
                                    <span>₹{order?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                            <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default OrderSummary