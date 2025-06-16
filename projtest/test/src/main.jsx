import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './page/product.jsx'
import Cart from "./page/cart"
import CheckoutPage from './page/checkout.jsx'
import Home from "./page/home.jsx"
import Login from "./page/login.jsx"
import Search from "./page/search.jsx"
import Header from './component/header.jsx'
import User from "./page/user.jsx"
import Register from "./page/register.jsx"
import { createBrowserRouter,RouterProvider , Outlet} from 'react-router-dom'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {path:'/product',element:<Product/>},
      {path:"/cart",element:<Cart/>},
      {path:"/checkout",element:<CheckoutPage/>},
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/search",element:<Search/>},
      {path:"/user",element:<User/>},
      {path:"/register",element:<Register/>}
    ]
  }
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
