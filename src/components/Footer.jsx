import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className=' sm:w-3/4'>
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt laudantium blanditiis eius veniam a! Error magnam, expedita cumque quae vel fuga velit! Veniam modi corrupti quis, architecto perferendis illum.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>
                <li>HOME</li>

            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+1233455 666</li>
                <li>HOME</li>
             

            </ul>
        </div>

      

    </div>
    <div className='py-10'>
    <hr />
    <p className='text-center py-5 text-sm'>Copyrights@manideep</p>
</div>
</>
    
  )
}

export default Footer