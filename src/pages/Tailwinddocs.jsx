import React from 'react'
import Navigation from '../components/Navigation'
import Docslist from '../components/Docslist'
import Tailwind from '../components/Tailwind'

function Tailwinddocs() {
  return (
    <div>
        <Navigation/>
        <div className='hidden md:block'>
        <Docslist/>
        </div>
        <Tailwind/>
    </div>
  )
}

export default Tailwinddocs