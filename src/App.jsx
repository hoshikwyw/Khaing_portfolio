import React from 'react'
import Navbar from './components/Navbar'
import Path from './redux/Paths'

const App = () => {
  return (
    <div>
      <div className=' shadow-md fixed top-0 w-full z-10'>
        <Navbar />
      </div>
      <div className=' w-full'>
        <Path />
      </div>
    </div>
  )
}

export default App
