import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import Productcard from './Productcard'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)  
    const [latestproducts,setlatestproducts] = useState([]);  

    useEffect(()=>{
      setlatestproducts(products.slice(0,10));
    },
    [])

  return (
    <>
    <div className='my-10 mt-20'>
          <div className='flex items-center flex-col justify-center my-8 text-center w-full'>
          <Title name1={"Latest"} name2={"Collections"} />
          <p className='my-3 font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eos commodi sapiente repellat eveniet, pariatur nulla fugiat tenetur! Inventore, soluta?</p>

          </div>
    </div>


    {/* redenring products */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
      {latestproducts.map((item,index)=>(
        <Productcard key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
      ))}
    </div>
    </>
  )
}

export default LatestCollection

