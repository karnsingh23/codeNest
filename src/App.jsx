import { useState } from 'react'
import Navigation from './components/Navigation'
import Mainsec from './components/Mainsec'
import Btn from './components/Btn'
import Newcard from './components/Newcard'
import './App.css'


function App() {
  

  return (
    <>
      <Navigation/>
      <Mainsec/>
      <div className='md:flex md:justify-evenly md:items-center md:mt-20'>
        <Newcard image='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"' cardname='Api hub' carddescription='Explore and integrate various APIs with our comprehensive documentation.'/>
        <Newcard image='https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4' cardname='Code Editor' carddescription='Write, edit, and test your code efficiently with our powerful code editor.'/>
      </div>
      
    </>
  )
}

export default App
