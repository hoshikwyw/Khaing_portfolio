import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Projects from '../pages/Projects'
import Connect from '../pages/Connect'
import Error from '../pages/Error'
import MainAbout from '../components/mainPageComponents/MainAbout'
import MainPosts from '../components/mainPageComponents/MainPosts'
import MainVideos from '../components/mainPageComponents/MainVideos'

const Paths = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/about' element={<MainAbout />} />
          <Route path='/posts' element={<MainPosts />} />
          <Route path='/videos' element={<MainVideos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Paths
