import { useState } from 'react'
import './App.css'
import Home from "./pages/home"
import PNF from "./pages/pageNotFound"
import Seller from "./seller"
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='*' element={<PNF/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
