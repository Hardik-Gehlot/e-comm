import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 ,BsBoxSeam} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import logo from "/logo.svg";
function index() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  //handle search query and navigate to another page and also closes search bar
  // const searchQueryHandler = (event) => {
  //   if (event.key === "Enter" && query.length > 0) {
  //     navigate(`/search/${query}`);
  //     setTimeout(() => {
  //       setShowSearch(false);
  //     }, 1000);
  //   }
  // }
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""}`}>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="E-com" />
      </div>
      <div className="searchbar">
        <input
          type="text "
          placeholder="search for your faaviurut items"
          // onChange={(e) => setQuery(e.target.value)}
          // onKeyUp={searchQueryHandler}
        />
      </div>
      {isLogin ? (
        <ul className="menuItems">
          <li className="menuItem">
            <BsBoxSeam/>
            Orders
          </li>
          <li className="menuItem">
            <AiOutlineHeart />
            Wishlist
          </li>
          <li className="menuItem">
            <BsCart3 />
            Cart
          </li>
          <li className="menuItem">
            <FaRegUser />
            Profile
          </li>
        </ul>
      ) : (
        <ul className="menuItems">
          <li className="menuItem">
           <button className="logreg">Login/Register</button>
          </li>
        </ul>
      )}
      {/* <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {
            mobileMenu ? (
              <VscChromeClose onClick={() => {
                setMobileMenu(false)
              }} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )
          }
        </div> */}
    </header>
  );
}

export default index;
