import { useState } from 'react'
import './App.css'
import Home from "./pages/home"
import PNF from "./pages/pageNotFound"
import Seller from "./seller"
import Login from "./seller/login"
import Register from "./seller/register"
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* seller */}
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/seller/login' element={<Login/>}/>
        <Route path='/seller/register' element={<Register/>}/>
        <Route path='*' element={<PNF/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
