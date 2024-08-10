import React from 'react'
import Docslist from '../components/Docslist'
import Navigation from '../components/Navigation'
import Docshome from '../components/Docshome'

function Docshomepage() {
  return (
    <div className=''>
      <Navigation/>
      <div className='hidden md:block'>
      <Docslist/>
      </div>
      <Docshome/>
    </div>
    
  )
}

export default Docshomepage