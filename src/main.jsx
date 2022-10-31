import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import MoviePage from './pages/moviepage/MoviePage'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
  },
  {
    path: 'movie/:id',
    element: <MoviePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
