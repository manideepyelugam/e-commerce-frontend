import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    
    const {currency,deliveryFee,cartTotal} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
                <Title name1={"Cart"} name2={"Total"}/>
        </div>

        <div className='flex flex-col gap-2 mt-8 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {cartTotal()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping fee</p>
                <p>{currency} {deliveryFee}</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {cartTotal() === 0 ? 0 : cartTotal() + deliveryFee}</b>
            </div>

        </div>

    </div>
  )
}

export default CartTotal