import { useState } from 'react'
import './App.css'
import Home from "./pages/home"
import PNF from "./pages/pageNotFound"
import Seller from "./seller"
import Login from "./seller/login"
import Register from "./seller/register"
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register"
import {AddProduct,ProductDetail,UpdateProduct} from "./seller/products"
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginUser/>}/>
        <Route path='/register' element={<RegisterUser/>}/>

        {/* seller */}
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/seller/login' element={<Login/>}/>
        <Route path='/seller/register' element={<Register/>}/>
        <Route path='/seller/add_product' element={<AddProduct/>}/>
        <Route path='/seller/product' element={<ProductDetail/>}/>
        <Route path='/seller/update_product' element={<UpdateProduct/>}/>
        <Route path='*' element={<PNF/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
