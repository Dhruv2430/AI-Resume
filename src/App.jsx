import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './AllComponents/Header'
import { Toaster } from './components/ui/sonner'


const App = () => {
  return (
  <>
    <Header/>
    <Outlet/>
    <Toaster />
  </>
  )
}

export default App