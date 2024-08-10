import React from 'react'
import Navigation from '../components/Navigation'
import Docslist from '../components/Docslist'
import DocsREACT from '../components/DocsREACT'



function Reactdocs() {
  return (
    <div>
        <Navigation/>
        <div className='hidden md:block'>
        <Docslist/>
        </div>
        <DocsREACT/>
      
    </div>
  )
}

export default Reactdocs