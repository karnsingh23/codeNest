import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import './btn.css'
function Btn({btnname}) {
  const Navigate=useNavigate()
  const navigateDocs=()=>{
    Navigate("/documentation")
  }
  return (
    
        <button onClick={navigateDocs} className='content  flex  justify-between '>{btnname} <div><FontAwesomeIcon icon={faArrowRight} /></div></button>
    
    
    
  )
}

export default Btn