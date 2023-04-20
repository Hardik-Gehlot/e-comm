import React, { useState } from 'react'
import "./style.scss";
import Login from "./login"
import Register from "./register"
import Navbar from "./components/navbar"
function index() {
    const [isLogedIn,setIsLogedIn] = useState(true);
  return (
    <div>
      {!isLogedIn ? <Register/>:(
        <>
          <Navbar/>
        </>
      )}
    </div>
  )
}

export default index
