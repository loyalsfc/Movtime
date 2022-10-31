import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar/Sidebar'
import SideItems from './components/SideItems/SideItems'
import Home from './pages/Home/Home'

function App() {

  return (
      <div className='flex'>
        <Sidebar />
        <Home />
        <SideItems />
      </div>
  )
}

export default App
