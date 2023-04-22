import React from 'react'
import "./style.scss"
import {fetchDataFromApi} from "../../utils/Api"
import {setSeller} from "../../utils/Storage"
import {useNavigate} from 'react-router-dom'
function index() {
  const navigate = useNavigate();
  async function handleForm(e){
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const result = await fetchDataFromApi("/seller/login",{email,password},"POST");
    if(!result.loggedIn){
      alert(result.message);
    }else{
      setSeller(result.data);
      navigate("/seller");
    }
  }
  return (
    <div>
      <form className='loginForm' onSubmit={handleForm}>
        <input className='inputField' name='email' placeholder='Email' type='email'/>
        <input className='inputField' name='password' placeholder='Password' type='text'/>
        <button className='btn'>Login</button>
        <div className="goto" onClick={()=>{navigate("/seller/register")}}>register page</div>
      </form>
    </div>
  )
}

export default index
