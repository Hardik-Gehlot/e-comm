import React from 'react'
import "./style.scss"
import {fetchDataFromApi} from "../../utils/Api"
import {setUser} from "../../utils/Storage"
import {useNavigate} from 'react-router-dom'
import {motion as m} from "framer-motion";
function index() {
  const navigate = useNavigate();
  async function handleForm(e){
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const result = await fetchDataFromApi("/login",{email,password},"POST");
    if(!result.loggedIn){
      alert(result.message);
    }else{
      setUser(result.data);
      navigate("/");
    }
  }
  return (
    <m.div initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:0.75,ease:"easeOut"}} className="sellerLoginSection">
    <div className="goto">
      <div className="container">
        <h1>WELCOME BACK</h1>
        <div className="desc">
          Thankyou for coming back, A lot of great deals are waiting for you. Login and grab them all.<br/>
          If you don't have account yet just register here.
        </div>

        <div className="btndiv">
          <button
            className="go"
            onClick={() => {
              navigate("/register");
            }}
          >
            register
          </button>
        </div>
      </div>
    </div>
    <div className="card">
      <form className="loginForm" onSubmit={handleForm}>
        <div>
          <h1>Login</h1>
        </div>
        <input
          className="inputField"
          name="email"
          placeholder="Enter Email"
          type="email"
        />
        <input
          className="inputField"
          name="password"
          placeholder="Enter Password"
          type="password"
        />
        <div className="logindiv">
          <div className="btn">Login</div>
        </div>
      </form>
    </div>
  </m.div>
  )
}

export default index
