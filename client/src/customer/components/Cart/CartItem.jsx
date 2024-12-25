import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCart, removeItemFromCart, updateCartItem } from '../../../Redux/Cart/Action';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(item._id));
    };


    const handleChangeQuantity = (num) => {
        const data = {
            cartItemId: item._id,
            quantity: item.quantity + num,
        }
        dispatch(updateCartItem(data));
    };

    return (
        <div className='shadow-lg p-5 rounded-lg mb-5 border'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='h-full w-full object-cover object-top'
                        src={item?.product?.imageUrl || 'placeholder-image-url'}
                        alt={item?.product?.title || 'Product Image'}
                    />
                </div>
                <div className='ml-5 space-y-2'>
                    <p className='font-semibold'>{item?.product?.title}</p>

                    <div className='flex gap-10'>
                        <p className='text-sm text-gray-600'>Size: {item?.size || 'N/A'}</p>
                        <p className='text-sm text-gray-600'>Color: {item?.product?.color}</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>Seller: {item?.product?.brand}</p>
                    </div>
                    <div className='flex space-x-3 pt-5'>
                        <p className='font-semibold'>₹{item?.totalDiscountedPrice}</p>
                        <p className='line-through opacity-50'>₹{item?.price}</p>
                        <p className='text-green-600 font-semibold'>{item?.discountPercent}% Off</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center gap-x-2'>
                    <IconButton onClick={() => handleChangeQuantity(-1)} disabled={item.quantity <= 1}>
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item?.quantity || 0}</span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={() => handleChangeQuantity(1)}>
                        <AddCircleOutline />
                    </IconButton>
                </div>

                <div>
                    <Button sx={{ color: "RGB(145 85 253)" }} onClick={handleRemoveItem}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
