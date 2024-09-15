import React, { useState } from 'react';

const Newsletter = () => {
    const [input, setInput] = useState(""); 
    function onSubmit(event) {
        event.preventDefault();
        setInput(""); 
    }

    return (
        <div className='text-center py-10 flex flex-col items-center'>
            <p className='font-semibold text-2xl'>Subscribe now and Get 20% Off</p>
            <p className='text-gray-600 mt-3 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, temporibus!</p>
            <form onSubmit={onSubmit} action="" className='w-full sm:w-1/2 flex items-center gap-3'>
                <input
                    type="email"
                    placeholder='Enter your Email'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    required
                    className='w-full sm:flex-1 outline-none border border-black border-b-1  py-3 px-3'
                />
                <button className='bg-black text-white text-sm px-10 py-4'>Submit</button>
            </form>
        </div>
    );
}

export default Newsletter;
