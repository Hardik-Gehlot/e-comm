import React, { useState } from "react";
import "./style.scss";
import logo from "/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function index(prop) {
  const navigate = useNavigate();
  return (
    <header className={`header`}>
      <div className="slogo" onClick={() => navigate("/")}>
        <img src={logo} alt="E-com" />
      </div>

      <ul className="smenuItems">
        <li className={`smenuItem ${prop.active === 1 ? "active" : ""}`} onClick={() => prop.setActive(1)}>Products</li>
        <li className={`smenuItem ${prop.active === 2 ? "active" : ""}`} onClick={() => prop.setActive(2)}>Orders</li>
      </ul>

      <div className="right">
        <button onClick={()=>navigate("/seller/add_product")}>Add Product</button>
        <div className="profile">
          <FaRegUser className="user"></FaRegUser>
        </div>
      </div>
    </header>
  );
}

export default index;
