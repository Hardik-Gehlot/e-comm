import React, { useEffect, useState } from 'react'
import "./style.scss";
import Navbar from "./components/navbar"
import {getSeller} from "../utils/Storage"
import {useNavigate} from 'react-router-dom'
function index() {
  const navigate = useNavigate();
    const [user,setUser] = useState({});
    useEffect(()=>{
      setUser(getSeller());
    },[]);
  return (
    <div>
      {!user ? navigate("/seller/login"):(
        <>
          <Navbar/>
        </>
      )}
    </div>
  )
}

export default index
