import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title.jsx'
import {ShopContext} from "../context/ShopContext"
import Productcard from "../components/Productcard.jsx"

const Collection = () => {
  const { products ,search , showsearch} = useContext(ShopContext)
  const [showfilter, setshowfilter] = useState(false)
  const [filtered, setfiltered] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sorttype, setsorttype] = useState('relavent')

  const categorytoggle = (e) => {
    const value = e.target.value;
    setcategory(prevCategory =>
      prevCategory.includes(value)
        ? prevCategory.filter(item => item !== value)
        : [...prevCategory, value]
    );
  }

  const subcategorytoggle = (e) => {
    const value = e.target.value;
    setsubcategory(prevSubcategory =>
      prevSubcategory.includes(value)
        ? prevSubcategory.filter(item => item !== value)
        : [...prevSubcategory, value]
    );
  }

  const applyfilter = () => {
    let filteredProducts = products;

    if(showsearch && search){
         filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => subcategory.includes(item.subCategory));
    }

    return filteredProducts;
  }

  const sortproducts = (filteredProducts) => {
    let sortedProducts = [...filteredProducts];

    switch (sorttype) {
      case "low-high":
        sortedProducts = sortedProducts.sort((a, b) => (a.price - b.price));
        break;
      case "high-low":
        sortedProducts = sortedProducts.sort((b, a) => (a.price - b.price));
        break;
      default:
        break;
    }

    setfiltered(sortedProducts);
  }

  useEffect(() => {
    const filteredProducts = applyfilter();
    sortproducts(filteredProducts);
  }, [category, subcategory, products, sorttype,search,showsearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter section */}
      <div className='min-w-60 '>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER</p>

        <div className={`border border-gray-400 py-5 px-2 ${showfilter ? " " : "hidden"} sm:block`}>
          <p className='mb-2 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Men"} onClick={categorytoggle} />
              MEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Women"} onClick={categorytoggle} />
              WOMEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Kids"} onClick={categorytoggle} />
              KIDS
            </p>
          </div>
        </div>

        <div className={`border border-gray-400 py-5 px-2 ${showfilter ? " " : "hidden"} sm:block`}>
          <p className='mb-2 text-sm font-medium'>SUB-CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Topwear"} onClick={subcategorytoggle} />
              Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Bottomwear"} onClick={subcategorytoggle} />
              Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Winterwear"} onClick={subcategorytoggle} />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <Title name1={"ALL"} name2={"COLLECTIONS"} />

          <select onChange={(e) => setsorttype(e.target.value)} className='border-2 border-gray-100 p-2 text-sm'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filtered.map((item, index) => (
            <Productcard key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
