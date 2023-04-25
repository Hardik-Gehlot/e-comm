import React from "react";
import "./style.scss";
import logo from "/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function index() {
  const navigate = useNavigate();
  return (
    <header className={`header`}>
      <div className="slogo" onClick={() => navigate("/")}>
        <img src={logo} alt="E-com" />
      </div>

      <ul className="smenuItems">
        <li className="smenuItem">Products</li>
        <li className="smenuItem">Orders</li>
      </ul>

      <div className="profile">
        <FaRegUser></FaRegUser>
        your name
      </div>
    </header>
  );
}

export default index;
