import React, { useEffect, useCallback } from 'react';
import CartItem from './CartItem';
import { Button, Divider, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../Redux/Cart/Action';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const loading = useSelector((state) => state.cart.loading);
    // const error = useSelector((state) => state.cart.error);


    const handleCheckout = useCallback(() => {
        navigate('/checkout?step=2');
    }, [navigate]);


    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);


    if (loading) return <CircularProgress />;

    return (
        <div>
            <div className='p-10 mt-10 lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {cart?.cartItems && cart.cartItems.length > 0 ? (
                        cart.cartItems.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))
                    ) : (
                        <Typography>No items in the cart</Typography>
                    )}
                </div>

                <div className='px-5 sticky top-0 mt-5 lg:mt-0'>
                    <div className='shadow-2xl p-5 rounded-2xl overflow-hidden'>
                        <p className='uppercase font-bold opacity-60 pb-5'>Price Details</p>
                        <Divider />
                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹{cart?.totalPrice || 0}</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Discount</span>
                                <span className='text-green-600'>
                                    -₹{(cart?.totalPrice || 0) - (cart?.totalDiscountedPrice || 0)}
                                </span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black font-bold'>
                                <span>Total Amount</span>
                                <span>₹{cart?.totalDiscountedPrice || 0}</span>
                            </div>
                        </div>
                        <Button
                            onClick={handleCheckout}
                            variant='contained'
                            className='w-full mt-5'
                            sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
