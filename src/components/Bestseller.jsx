import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productcard from './Productcard';

const Bestseller = () => {
    const {products} = useContext(ShopContext);

    const [bestseller,setbestseller] = useState([]);

    useEffect(() => {
        const arr = (products.filter((item) => (item.bestseller == true)))
        setbestseller(arr.slice(0,5))
    },[])

  return (
    <div className='my-20 '>
        <div className='pt-16 text-center flex flex-col items-center justify-center'>
            <Title name1={"Best"} name2={"Seller"}/>
            <p className='pt-4 text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex hic vitae amet minus cupiditate adipisci iure voluptatibus ad nemo.</p>
        </div>

        {/* rendering products */}

        <div className='grid mt-14 gap-4 gap-y-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                {bestseller.map((item,index) => (
                    <Productcard key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))}
        </div>

    </div>
  )
}

export default Bestseller