import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import strip from '../assets/frontend_assets/stripe_logo.png'
import razor from '../assets/frontend_assets/razorpay_logo.png'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {
  const [method,setmethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t'>
          <div className='flex flex-col gap-4 w-full sm:max-w-[450px]'>

            <div className='text-xl sm:text-2xl my-3'>
              <Title name1={"Delivery"} name2={"Information"}/>
            </div>

            <div className='flex gap-3'>
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
            </div>
            <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
            <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' />
            <div className='flex gap-3'>
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City Name' />
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State Name' />
            </div>
            <div className='flex gap-3'>
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip Code' />
                 <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
            </div>
            <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone Number' />
          </div>

          <div className='mt-10'>
            <div className='mt-8 min-w-80'>
                      <CartTotal/>
            </div>

            <div className='mt-20 text-xl'>
                 <Title name1={"Payment"} name2={"Method"}/>
                 <div className='flex gap-3 flex-col mt-8 '>
                     <div onClick={() => setmethod("strip")}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "strip"? "bg-green-500" : " "}`}></p>
                         <img src={strip} className='h-5 mx-4' alt="" />
                     </div>
                     <div onClick={() => setmethod("razor")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razor"? "bg-green-500" : " "}`}></p>
                         <img src={razor } className='h-5 mx-4' alt="" />

                     </div>
                     <div onClick={() => setmethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod"? "bg-green-500" : " "}`}></p>
                        <p className='text-gray-600 text-sm font-medium mx-4'>Cash on Delivery</p>
                     </div>

                 </div>

            </div>


            <div className='w-full text-end mt-8'>
                      <button onClick={() => navigate("/Orders")} className='bg-black text-white text-md py-3 px-6 '>Place Order</button>
                     </div>

          </div>
    </div>
  )
}

export default Placeorder