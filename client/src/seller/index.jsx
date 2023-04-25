import React, { useEffect, useState } from 'react'
import "./style.scss";
import Navbar from "./components/navbar"
import {getSeller} from "../utils/Storage"
import {useNavigate} from 'react-router-dom'
import {fetchDataFromApi} from "../utils/Api";
import Carousel from "./components/carousel";
function index() {
  const [user,setUser]=useState({});
  const [products,setProducts]=useState([]);
  useEffect(() => {
    setUser(getSeller());
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      if (user?._id) {
        const result = await fetchDataFromApi("/seller/get_products", {id: user._id}, "POST");
        setProducts(result?.data);
      }
    };
    fetchData();
  }, [user]);
  return (
    <div>
      {!user ? navigate("/seller/login"):(
        <>
          <Navbar/>
          <div className="main">
            {products?.map((item,index)=>{
              return <Carousel key={index} item={item}/>
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default index
