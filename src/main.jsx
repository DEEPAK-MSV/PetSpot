import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cats from './Animals/Cats'
import Dogs from './Animals/Dogs'
import './index.css'

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Content from './pages/Content'
import Page404 from './pages/Page404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/home",
        element: <Content />
      },
      {
        path: "cats",
        element: <Cats />
      },
      {
        path: "dogs",
        element: <Dogs />
      },
    ],
  },{
    path: "/*",
    element: <Page404/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
