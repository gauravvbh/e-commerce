import React from 'react'
import MainCarousel from '../../components/HomeMainCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import TopProduct from '../../components/TopProduct/TopProduct'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const {auth}=useSelector(state=>state)
  console.log(auth)

  return (
    <div>
      <MainCarousel />
      <TopProduct/>
      <div>
        <div className='flex h-[6rem] justify-center flex-col gap-y-[5px] items-center font-semibold	py-[4rem]'>
          <h1 className='uppercase text-2xl'>trending</h1>
          <p className='text-gray-500 text-sm'>Discover our latest trends</p>
          
        </div>
        <HomeSectionCarousel />
      </div>
    </div>
  )
}

export default HomePage