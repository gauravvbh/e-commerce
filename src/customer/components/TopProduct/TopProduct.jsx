import React from 'react'

const TopProduct = () => {
    return (
        <div> 
            <div className='p-2 flex mt-10 mb-10 md:flex-nowrap sm:flex-wrap'>
                <div className='flex justify-between md:flex-col sm:flex-row'>
                    <div className='sm:overflow-hidden md:overflow-visible md:h-[30rem] md:w-[20rem] sm:h-[40vh] sm:w-[50vw]'>
                        <img className='sm:overflow-hidden md:overflow-visible h-full w-full object-contain transition duration-500 ease-in-out  hover:scale-110' src="/Part2/part2_img1.jpg" alt="" />
                    </div>
                    <div className='sm:overflow-hidden md:overflow-visible md:h-[30rem] md:w-[20rem] sm:h-[40vh] sm:w-[50vw]'>
                        <img className='h-full w-full object-contain transition duration-500 ease-in-out  hover:scale-110' src="/Part2/part2_img2.jpg" alt="" />
                    </div>
                </div>

                <div className='md:h-[57rem] md:w-[60rem]'>
                    <img className='h-full w-full object-contain transition duration-500 ease-in-out  hover:scale-105' src="/Part2/part2_img3.jpg" alt="" />
                </div>

                <div className='flex justify md:flex-col sm:flex-row'>
                    <div className='sm:overflow-hidden md:overflow-visible md:h-[30rem] md:w-[20rem] sm:h-[40vh] sm:w-[50vw]'>
                        <img className='h-full w-full object-contain transition duration-500 ease-in-out  hover:scale-110' src="/Part2/part2_img4.jpg" alt="" />
                    </div>
                    <div className='sm:overflow-hidden md:overflow-visible md:h-[30rem] md:w-[20rem] sm:h-[40vh] sm:w-[50vw]'>
                        <img className='h-full w-full object-contain transition duration-500 ease-in-out  hover:scale-110' src="/Part2/part2_img5.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProduct