import React from 'react'
import { Banner } from './components/Banner'
import { Movies } from './components/Movies'
import { Navbar } from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Movies/>
    </div>
  )
}

export default App
