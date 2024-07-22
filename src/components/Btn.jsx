import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Btn({btnname}) {
  return (
    <div className='flex justify-center items-center mt-9 mb-14'>
        <button className='border-white border rounded-md  w-60 py-3 flex p-4 justify-between '>{btnname} <div><FontAwesomeIcon icon={faArrowRight} /></div></button>
    </div>
    
    
  )
}

export default Btn