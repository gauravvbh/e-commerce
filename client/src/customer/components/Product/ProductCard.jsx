import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/product/${product._id}`)} className='cursor-pointer flex flex-col relative bg-white hover:shadow-2xl overflow-hidden w-[20rem] mx-5 my-5 transition-transform duration-300 ease-out hover:scale-105'>
            <div className='h-4/5 w-full'>
                <img
                    className='h-full w-full object-cover'
                    src={product.imageUrl}
                    alt="Mens solid Pure Cotton Straight Kurta"
                />
            </div>
            <div className='p-[10px]'>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                <p className='text-sm text-gray-500'>{product.title}</p>
            </div>
            <div className='mt-2 mb-5 px-[10px] flex items-center space-x-2'>
                <p className='font-semibold'>₹{product.discountedPrice}</p>
                <p className='line-through opacity-70'>₹{product.price}</p>
                <p className='text-green-500 font-semibold'>{product.discountPercent}% Off</p>
            </div>
        </div>
    )
}

export default ProductCard