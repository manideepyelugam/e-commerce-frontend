import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Product from '../pages/Product';
import Productcard from './Productcard';

const Relatedproducts = ({category,subcategory}) => {
    const {products} = useContext(ShopContext);
    const [same,setsame] = useState([]);

    useEffect(() =>{
        if(products.length > 0){
            let cp = products.slice();

            cp = cp.filter(item => category == item.category);
            cp = cp.filter(item => subcategory == item.subCategory);

            setsame(cp.slice(0,5));}
    },[products,category,subcategory])

    
  return (
    <div className='mt-20'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {same.map((item,index)=>(
                    <Productcard key={index} id={item._id} price={item.price} image={item.image} name={item.name}/>
                ))}
        </div>

    </div>
  )
}

export default Relatedproducts