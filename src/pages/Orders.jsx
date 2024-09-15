import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
   
  const {products,currency} = useContext(ShopContext);


  return (
    <div className='border-t pt-16'>
        <div className='text-2xl mb-10'>
              <Title name1={"My"} name2={"Orders"}/> 
        </div>

        <div>
          {products.slice(1,4).map((item,index) => (
                <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' key={index}>
                      <div className='flex items-start gap-6 text-sm'>
                            <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                            <div>
                              <p className='sm:text-base font-medium'>{item.name}</p>
                              <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                        <p className='text-lg'>{currency}{item.price}</p>
                                        <p>Size : xl</p>
                                        <p>Quantity : 2</p>
                              </div>
                              <p className='mt-2'>Date :<span className='text-gray-500 ml-2'>1, Jul, 2024</span></p>
                            </div>
                      </div>

                      <div className='md:w-1/2 flex justify-between mt-6 sm:mt-0'>
                            <div className='flex items-center gap-2 '>
                                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                        <p className='text-sm'>Ready to Ship</p>
                            </div>
                            <button className='border text-sm px-4 py-2 hover:bg-black hover:text-white'>Track Your Order</button>


                      </div>

                </div>
          ))}
        </div>
    </div>
  )
}

export default Orders