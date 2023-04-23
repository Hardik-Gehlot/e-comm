import React from "react";
import "./style.scss";
import logo from "/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function index() {
  const navigate = useNavigate();
  return (
    <header className={`header`}>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="E-com" />
      </div>

      <ul className="menuItems">
        <li className="menuItem">Products</li>
        <li className="menuItem">Orders</li>
      </ul>

      <div className="profile">
        <FaRegUser></FaRegUser>
      </div>
    </header>
  );
}

export default index;
