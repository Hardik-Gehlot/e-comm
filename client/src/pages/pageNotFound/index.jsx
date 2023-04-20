import React from 'react'
import "./style.scss";
import gif from "../../animations"
import {useLottie} from "lottie-react"
import {useNavigate} from "react-router-dom";
function index() {
  const navigate = useNavigate();
  const {View} = useLottie(gif.pnpOptions)
  return (
    <div>
      {View}
      <div className="home" onClick={()=>navigate("/")}>Go Back</div>
    </div>
  )
}

export default index
