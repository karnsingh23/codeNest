import React from 'react'
import Navigation from '../../components/Navigation'
import Docslist from '../../components/Docslist'
import HTMLtags from '../../components/HTML/HTMLtags'

function Tags() {
  return (
    <div>
        <Navigation/>
        <div className='hidden md:block'>
        <Docslist/>
        </div>
        <HTMLtags/>
        
       

        
    </div>
  )
}

export default Tags