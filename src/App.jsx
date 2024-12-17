import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Docshomepage from './pages/Docshomepage'
import HTMLdocs from './pages/HTML/HTMLdocs'
import Reactdocs from './pages/React/Reactdocs'
import JavaScriptdocs from './pages/JavaScript/JSdocs'
import CSSdocs from './pages/CSS/CSSdocs'
import Docslistpage from './pages/Docslistpage'
import Tags from './pages/HTML/Tags'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/documentation' element={<Docshomepage />} />
          <Route path='/html' element={<HTMLdocs />} />
          <Route path='/htmltags' element={<Tags />} />
          <Route path='/react' element={<Reactdocs />} />
          <Route path='/javascript' element={<JavaScriptdocs />} />
          <Route path='/tailwind' element={<CSSdocs />} />
          <Route path='/docslistpage' element={<Docslistpage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
