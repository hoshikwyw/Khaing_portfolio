import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Projects from '../pages/Projects'
import Videos from '../pages/Videos'

const Paths = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Paths
