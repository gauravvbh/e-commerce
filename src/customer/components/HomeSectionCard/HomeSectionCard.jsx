import React from 'react';

const HomeSectionCard = ({item}) => {
    return (
        <div className='cursor-pointer flex flex-col relative bg-white hover:shadow-custom overflow-hidden w-[18rem] mx-3 my-10 transition-transform duration-300 ease-out hover:scale-105'>
            <div className='h-[25rem] w-[20rem]'>
                <img
                className='h-full w-full object-cover object-left-top'
                    src={item.image}
                    alt={item.title}
                />
            </div>
            <div className='p-[10px]'>
                <h3 className='text-lg font-medium opacity-60 text-gray-900'>{item.brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{item.title}</p>
            </div>
            <div className='flex gap-x-3 p-[10px]'>
                <p className='font-semibold'>{item.selling_price}</p>
                <p className='line-through opacity-50'>{item.price}</p>
                <p className='text-green-500 font-semibold'>{item.disscount}</p>
            </div>
        </div>
    );
}

export default HomeSectionCard;
