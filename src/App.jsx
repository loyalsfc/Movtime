import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar/Sidebar'
import SideItems from './components/SideItems/SideItems'
import Dashboard from './pages/Home/Dashboard'

function App() {

  return (
      <div className='flex'>
        <Sidebar />
        <Dashboard />
        <SideItems />
      </div>
  )
}

export default App
