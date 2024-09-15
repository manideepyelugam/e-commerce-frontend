import React from 'react'
import img from "../assets/frontend_assets/hero_img.png"

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border mt-5 border-gray-400'>

      <div className='w-full sm:w-2/4 flex items-center flex-col justify-center'>

<div className='flex flex-col py-6 sm:py-0'>
            <div className='flex items-center py-2 sm:py-4'>
                  <div className='w-16 h-[2px] bg-black mx-3'></div>
                <p className='text-sm md:text-lg'>OUR BESTSELLERS</p>
            </div>

            <p className='text-3xl md:text-[40px] prata-regular py-2 '>Latest Arrivals</p>

            <div className='flex items-center py-2 sm:py-4'>
                <p className='text-sm md:text-lg'>SHOP NOW</p>
                <div className='w-16 h-[2px] bg-black mx-3'></div>
            </div>
            </div>


      </div>
      <div className='w-full sm:w-2/4 flex items-center justify-center'>
      <img src={img} alt=""/></div>

    </div>
  )
}

export default Hero