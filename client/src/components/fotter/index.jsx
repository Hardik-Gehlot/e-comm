import React from 'react'
import "./style.scss"
import {useNavigate} from "react-router-dom"
function index() {
    const navigate = useNavigate();
  return (
    <div className='fotter'>
      <div className="seller" onClick={()=>navigate("/seller")}>Become a seller</div>
    </div>
  )
}

export default index
