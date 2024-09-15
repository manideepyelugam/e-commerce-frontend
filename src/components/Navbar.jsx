import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/frontend_assets/search_icon.png";
import profile from "../assets/frontend_assets/profile_icon.png"
import cart from "../assets/frontend_assets/cart_icon.png"
import bars from "../assets/frontend_assets/menu_icon.png"
import back from "../assets/frontend_assets/dropdown_icon.png"
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [visble,setvisble] = useState(false)
    const {showsearch,setshowsearch,cou} = useContext(ShopContext);
  return (
    <div className=' flex items-center justify-between py-7 font-medium'>

            <h1>Hello</h1>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className="flex items-center justify-center flex-col gap-1">
                    <h1>HOME</h1>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700'/>
                </NavLink>

                <NavLink to='/About' className="flex items-center flex-col justify-center gap-1">
                    <h1>ABOUT</h1>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700'/>
                </NavLink>

                <NavLink to='/Collection' className="flex items-center flex-col justify-center gap-1">
                    <h1>COLLECTION</h1> 
                    <hr className=' hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>

            

                <NavLink to='/Contact' className="flex items-center flex-col justify-center gap-1">
                    <h1>CONTACT</h1>
                    <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                </ul>


               <div className='flex items-center gap-6'>

                <img src={logo} onClick={() => setshowsearch(!showsearch)} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>

                    <Link to={"/login"}><img src={profile}  className='w-5 cursor-pointer' alt="" /></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-32 py-3 px-5 text-gray-500 bg-slate-100'>
                            <p className='hover:text-black cursor-pointer'>Profile</p>
                            <p className='hover:text-black cursor-pointer'>Orders</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                       
                    </div>  
                </div>
                <Link to='/cart' className='relative'>
                            <img src={cart} className='w-5 cursor-pointer' alt="" />
                            <p className='absolute right-[-5px] bottom-[-5px] w-4  text-center bg-black text-white rounded-full text-[10px]'>{cou}</p>
                    </Link>

                    <img onClick={()=>setvisble(true)} src={bars} className='w-6 sm:hidden' alt="" />
               </div>


               <div className={`absolute top-0  right-0 bg-white bottom-0 overflow-hidden transition-all p-3 ${visble ? 'w-full' : "hidden"}`}>
                    <div onClick={() => setvisble(false)} className='flex items-center '>
                        <img src={back}  className='w-2.5 cursor-pointer mr-2' alt="" />
                        <p className='cursor-pointer'>Back</p>
                    </div>
                    <NavLink to='/' className="px-2 py-3">
                    <h1 onClick={() => setvisble(false)} className='border-b-[1px] mx-3 border-black'>HOME</h1>
                </NavLink>

                <NavLink to='/About' className="px-2  py-3">
                    <h1 onClick={() => setvisble(false)} className='border-b-[1px] mx-3 border-black'>ABOUT</h1>
                </NavLink>

                <NavLink to='/Collection' className="px-2  py-3">
                    <h1 onClick={() => setvisble(false)} className='border-b-[1px] mx-3 border-black'>COLLECTION</h1> 
                </NavLink>

            

                <NavLink to='/Contact' className="px-2  py-3">
                    <h1 onClick={() => setvisble(false)} className='border-b-[1px] mx-3 border-black'>CONTACT</h1>
                </NavLink>

               </div>







    </div>
  )
}

export default Navbar