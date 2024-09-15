import React from 'react'

const Title = ({name1,name2}) => {
  return (
    <div className='flex text-center'>
        <p className='text-3xl font-medium text-[#4d5053] mr-2'>{name1}</p>
        <p className='text-3xl font-medium text-black'>{name2}</p>
    </div>
  )
}

export default Title