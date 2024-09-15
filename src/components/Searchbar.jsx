import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import searchicon from "../assets/frontend_assets/search_icon.png"
import wrong from "../assets/frontend_assets/cross_icon.png"
import { useLocation } from 'react-router-dom'

const Searchbar = () => {
    const {search,setsearch,showsearch,setshowsearch} = useContext(ShopContext)
    const [visble,setvisble] = useState(false);
    const location = useLocation();

     useEffect(()=>{
        if(location.pathname.includes("/Collection")){
                setvisble(true);
        }else{
            setvisble(false);
        }
     },[location])    


  return showsearch && visble?(
    <div className='border-t border-b text-center'>
        <div className='inline-flex items-center justify-center border-gray-500 px-5 py-2 mx-5 my-2 rounded-full w-3/4 s'>
            <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='Search here' className='flex-1 outline-none border-gray-400 border py-3 px-4 rounded-full  bg-inherit text-md'/>
            <img src={searchicon} className='w-5 mx-5' alt="" />
            <img onClick={() => setshowsearch(!showsearch)} src={wrong} className='w-5 cursor-pointer' alt="" />
        </div>


    </div>
  ) : null
}

export default Searchbar