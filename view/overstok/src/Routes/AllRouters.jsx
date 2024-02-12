import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Home} from "../pages/homepage/Home"
import Login from '../pages/loginpage/Login'
import Product from '../pages/ProducPage/Product'
import AddProduct from '../pages/ProducPage/AddProduct'
import Cart from '../pages/Cart/Cart'
function AllRouters() {
  return (
    <div>
        
        <Routes>
         <Route path='/' element={<Home/>} />
         {/* <Route path='/register' element={<Signup/>} /> */}
         <Route path='/register'  element={<Login/>} />
         <Route path='/Addproduct'  element={<AddProduct/>}  />
         <Route path='/product' element={<Product/>} />
         <Route path='/getCart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRouters