import { Input } from 'postcss'
import React, { useState } from 'react'

const Login = () => {

  const [current,setcurrent] = useState("Signup")
 const onsubmit = async(e) => {
            e.preventDefault();

  }
  return (
      <form onSubmit={onsubmit} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 mt-14 gap-4 text-gray-700 m-auto'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{current}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {current == "Login" ? " ": <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Name'/>}
        <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Email'/>
        <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Password'/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your Password??</p>
          {current == "Login" ? <p onClick={()=>setcurrent("Sign-up")} className="cursor-pointer">Create Account</p>
          :<p onClick={()=>setcurrent("Login")} className="cursor-pointer">Login Here </p>}

        </div>
        <button className='bg-black text-white py-2 px-10 mt-10'>{current == "Login" ? "Login" : "Sign-in"}</button>
      </form>
  )
}

export default Login