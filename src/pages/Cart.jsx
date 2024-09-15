import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import del from "../assets/frontend_assets/bin_icon.png"
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products,currency,cartitems,updatedCart,navigate} = useContext(ShopContext);
  const [cartData,setcartData] = useState([]);

  useEffect(() => {
          const temp = [];
          for(const items in cartitems){
            for(const item in cartitems[items]){
              if(cartitems[items][item] > 0){
                  temp.push({
                    _id : items,
                    size : item,
                    quantity : cartitems[items][item]
                  })
              }
            }
          }

      setcartData(temp)          
  },[cartitems])


  return (

    cartData.length > 0 ?  <div className='border-t pt-14'>

      <div className='text-2xl mb-2'>
             <Title name1={"Your"} name2={"Cart"}/>
      </div>

      <div>
       {
         cartData.map((item,index) => {
             const productData = products.find((pro) => pro._id === item._id);

             return(
               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                 <div className='flex items-start gap-6'>
                   <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                   <div>
                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                     <div className='flex items-center gap-5 mt-3'>
                         <p>{currency}{productData.price}</p>
                         <p className='border bg-gray-100 px-2 py-0.5'>{item.size}</p>
                     </div>
                   </div>
                 </div>

                 <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updatedCart(item._id,item.size,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                 <img onClick={() => updatedCart(item._id,item.size,0)} src={del} className='w-4 sm:w-6 mr-4 cursor-pointer' alt="" />

               </div>
             )
         })
       }
      </div>

       <div className='flex justify-end my-20'>
               <div className='w-full sm:w-[450px]'>
                     <CartTotal/>
                     <div className='w-full text-end mt-8'>
                      <button onClick={() => navigate("/place-order")} className='bg-black text-white text-md py-3 px-6 '>Proceed to Order</button>
                     </div>
               </div>

       </div>
 </div> : <div className='h-[60vh] flex items-center justify-center'>
     <h1>Shop Something</h1>
 </div>
   
  )
}

export default Cart