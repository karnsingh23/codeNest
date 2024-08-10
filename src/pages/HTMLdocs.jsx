import React from 'react'
import Navigation from '../components/Navigation'
import Docslist from '../components/Docslist'
import HTML from '../components/HTML'

function HTMLdocs() {
  return (
    <div>
        <Navigation/>
        <div className='hidden md:block'>
        <Docslist/>
        </div>
        <HTML/>
       

        
    </div>
  )
}

export default HTMLdocs