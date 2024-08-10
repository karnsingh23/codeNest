import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Docshomepage from './pages/Docshomepage'
import HTMLdocs from './pages/HTMLdocs'
import Reactdocs from './pages/Reactdocs'
import JavaScriptdocs from './pages/JavaScriptdocs'
import Tailwinddocs from './pages/Tailwinddocs'
import Docslistpage from './pages/Docslistpage'




function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/documentation' element={<Docshomepage/>} />
        <Route path='/html' element={<HTMLdocs/>}/>
        <Route path='/react' element={<Reactdocs/>}/>
        <Route path='/javascript' element={<JavaScriptdocs/>}/>
        <Route path='/tailwind' element={<Tailwinddocs/>}/>
        <Route path='/docslistpage' element={<Docslistpage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
