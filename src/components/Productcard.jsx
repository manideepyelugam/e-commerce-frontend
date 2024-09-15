import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Productcard = ({id,image,price,name}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    
    <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]}  alt="/" />
    </div>

    <p className='text-sm pt-3 pb-1'>{name}</p>
    <p className='text-sm font-medium'>{currency} {price}</p>
          
    </Link>
  )
}

export default Productcard