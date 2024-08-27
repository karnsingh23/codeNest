import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Docslist() {
  

  return (
    <div className='h-[100%] w-[100%] flex justify-center '>
      <div className={`gap-5 w-[100%] text-xl md:text-[18px] fixed md:left-0 top-14 md:top-16 z-10 flex flex-col items-center md:w-[20%] h-screen md:min-h-screen md:items-start p-7 md:gap-2 bg-[#23262f] mt-0.5 `}>
      <NavLink to="/home" className={({ isActive }) => ` px-10 md:w-44 md:p-1 md:px-2 rounded-sm duration-200 ${isActive ? "bg-[#ff7700]" : "bg-transparent"}`}>Home</NavLink>
      <NavLink to="/html" className={({ isActive }) => ` px-10 md:w-24 lg:w-52 md:p-1 md:px-2 rounded-sm duration-200 ${isActive ? "bg-[#ff7700]" : "bg-transparent"}`}>HTML</NavLink>
      <NavLink to="/tailwind" className={({ isActive }) => ` px-10 md:w-24 lg:w-52 md:p-1 md:px-2 rounded-sm duration-200 ${isActive ? "bg-[#ff7700]" : "bg-transparent"}`}>Tailwind</NavLink>
      <NavLink to="/javascript" className={({ isActive }) => ` px-10 md:w-24 lg:w-52 md:p-1 md:px-2 rounded-sm duration-200 ${isActive ? "bg-[#ff7700]" : "bg-transparent"}`}>JavaScript</NavLink>
      <NavLink to="/react" className={({ isActive }) => ` px-10 md:w-24 lg:w-52 md:p-1 md:px-2 rounded-sm duration-200 ${isActive ? "bg-[#ff7700]" : "bg-transparent"}`}>React</NavLink>
    </div>
    </div>
    
  );
}

export default Docslist;
