import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Path from './redux/Paths'
import Loading from './pages/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
    return <Loading />;
  }

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
