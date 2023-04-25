import React from 'react'
import "./style.scss";
import { useNavigate } from 'react-router-dom';
function index({item}) {
  const navigate = useNavigate();
  return (
    <div className='carousel' onClick={()=>navigate('/seller/product',{state:{item}})}>
      <img src={item?.images[0]} alt="Image" className="img" />
      <div className="name">{item?.name}</div>
      <div className="price">₹{item?.price} <span>Quantity:{item?.quantity}</span></div>
      <div className="btns">
        <button className="btn">Update</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  )
}

export default index
