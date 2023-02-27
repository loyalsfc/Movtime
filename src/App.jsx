import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar/Sidebar'
import Login from './pages/landingpages/Login'
import userAuth from './utils/userAuth'

function App() {
  const {currentUser} = userAuth()

  return (
      <>
        {!currentUser ?
          (
            <Login />
          ):(<div className='flex'>
            <Sidebar />
            {<Outlet/>}
          </div>)
        }
      </>
  )
}

export default App
