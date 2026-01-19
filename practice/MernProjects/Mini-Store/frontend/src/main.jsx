import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProductPages from './pages/ProductPages.jsx'


let router = createBrowserRouter([

  {path:'/', element:<App/>},
  {path:'/12', element:<ProductPages/>}
])

createRoot(document.getElementById('root')).render(

  
  <StrictMode>

   <RouterProvider router={router} />
  </StrictMode>,
)
