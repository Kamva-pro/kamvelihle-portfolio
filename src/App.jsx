import {BrowserRouter} from 'react-router-dom';
import React from 'react'

import {About, Contact, Hero, Navbar, 
  Works, StarsCanvas,} from './components';



 const  App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero bg-cover bg-no-repeat
       bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>  
      <Works/>  
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}


export default App