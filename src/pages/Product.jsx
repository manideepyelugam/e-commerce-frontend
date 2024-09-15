import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Relatedproducts from '../components/Relatedproducts';
import Title from '../components/Title.jsx'

const Product = () => {
  const {ProductId} = useParams(); 
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productdata,setproductdata] = useState(false);
  const [image,setimage] = useState('');
  const [size,setsize] = useState("")

  const fetchdata = () => {
    const product = products.find(item => item._id === ProductId);
    if (product) {
      setproductdata(product);
      setimage(product.image[0]);
      
    }
  };

  // console.log(productdata);

  
   useEffect(() => {
      fetchdata()      
   },[ProductId,products])

  return productdata ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.77%] w-full'>

          {productdata.image.map((item, index) => (
              <img 

              onClick={() => setimage(productdata.image[index])}
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt={`Product Image ${index + 1}`} 
              />
            ))}

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>

        </div>

        <div className='flex-1'>
              <h1 className='font-semibold text-2xl mb-4'>{productdata.name}</h1>
              <p className='font-medium text-2xl mb-6'>{currency} {productdata.price}</p>
              <p className='text-gray-700 w-full md:w-3/4'>{productdata.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                   <div className='flex gap-2'>
                            {productdata.sizes.map((item,index) => (
                                <button onClick={() => setsize(item)} key={index} className={`bg-slate-100 border px-4 py-2 ${item === size? 'border-black' : " "}`}>{item}</button>
                            ))}
                   </div>
              </div>
              <button onClick={() => addToCart(productdata._id,size)} className='bg-black text-white py-3 active:bg-gray-600 px-6 text-md'>Add to Cart</button>
              <hr className='mt-10 sm:w-4/5'/>
              <div className='text-md text-gray-500 mt-5 flex flex-col gap-1'>
                          <p>Cash on delivery</p>
                          <p>Easy return and Exchange policy</p>
                          <p>100% Original product</p>
              </div>
        </div>

      </div>

      <div className='mt-20'>
                <div className='flex'>
                  <b className='border px-5 py-2 text-sm'>Description</b>
                  <p className='border px-5 py-2 text-sm'>Reviews</p>
                </div>
                <div className='border text-gray-600 px-6 py-6 text-sm flex flex-col gap-4'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, placeat blanditiis consequuntur neque velit tempore eveniet facere odio atque sit accusamus aliquam. Dicta iure voluptates, quos rerum, ut deleniti magni, dignissimos at optio sed dolores culpa molestias hic neque officia.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam impedit quidem nisi optio ipsam. Nihil alias, ea, esse nisi minus illum laborum earum repudiandae hic sequi soluta aliquam doloremque quos quo. Ipsum, doloribus iste. Modi amet doloribus aspernatur id exercitationem beatae natus, illum facilis adipisci eius ratione animi quaerat!</p>
                </div>
      </div>

      <div className='mt-20'>
        <Title name1={"Related"} name2={"Products"}/>
        <Relatedproducts category={productdata.category} subcategory={productdata.subCategory}/>
      </div>

    </div>
  ) : null
}

export default Product
