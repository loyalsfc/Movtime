import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import MoviePage from './pages/moviepage/MoviePage'
import Dashboard from './pages/Dashboard/Dashboard'
import { ContextProvider } from './Context'
import Home from './pages/landingpages/Home'
import Register from './pages/landingpages/Register'
import Login from './pages/landingpages/Login'
import { Provider } from 'react-redux'
import { store } from './app/store'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
  },
  {
    path: 'movie/:id',
    element: <MoviePage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
