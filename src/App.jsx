import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SideItems from './components/SideItems/SideItems'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='bg-secondary-dark'>
      <div className='flex container mx-auto'>
        <Sidebar />
        <Home />
        <SideItems />
      </div>
    </div>
  )
}

export default App
