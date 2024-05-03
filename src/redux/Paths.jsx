import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Projects from '../pages/Projects'
import Videos from '../pages/Videos'
import Error from '../pages/Error'

const Paths = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/videos' element={<Videos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Paths
