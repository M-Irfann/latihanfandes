import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './page/product.jsx'
import Cart from "./page/cart"
import CheckoutPage from './page/checkout.jsx'
import Home from "./page/home.jsx"
import Login from "./page/login.jsx"
import Search from "./page/search.jsx"
import HEADer from './component/header.jsx'
import User from "./page/user.jsx"
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  

  {path:'/product',element:<Product/>},
  {path:"/cart",element:<Cart/>},
  {path:"/checkout",element:<CheckoutPage/>},
  {path:"/home",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/search",element:<Search/>},
  {path:"/",element:<User/>}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HEADer className="hidden"/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
