import React from 'react'
import image from '../assets/img.jpeg'
import Btn from './Btn'

function Mainsec() {
  return (
    <div className='flex flex-col justify-center items-center mt-8 md:mt-32 md:flex-row md:justify-evenly md:items-center'>
        <img className='w-60 md:w-80 shadow-2xl shadow-gray-600 rounded-[50%]' src={image} alt="" />
        <div className='w-auto flex flex-col items-center'>
          <h1 className='text-2xl mt-8 md:text-6xl'>Welcome to <span className='text-[#ff7700] font-bold'>कोडhub</span>  </h1>
          <p className=' mt-5  w-80 md:w-auto '>"Solutions designed by programmers, for programmers."</p>
          <Btn btnname='Check Docs'/>
        </div>
        
    </div>
  )
}

export default Mainsec