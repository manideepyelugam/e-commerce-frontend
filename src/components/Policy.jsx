import React from 'react'
import icon from "../assets/frontend_assets/exchange_icon.png"

const Policy = () => {
  return (
    <div className='my-20 pt-10 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center'>

        <div className='flex flex-col justify-center items-center'>
            <img className='w-20 mb-5' src={icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <img className='w-20 mb-5' src={icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <img className='w-20 mb-5' src={icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange</p>
        </div>

    </div>
  )
}

export default Policy