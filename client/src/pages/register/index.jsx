import React from 'react'
import "./style.scss"
import {fetchDataFromApi} from "../../utils/Api"
import {setUser} from "../../utils/Storage"
import {useNavigate} from 'react-router-dom'
function index() {
  const navigate = useNavigate();
  async function handleForm(e){
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const password = e.target.elements.password.value;
    const cnfPassword = e.target.elements.cnfPassword.value;
    const street = e.target.elements.street.value;
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const zip = e.target.elements.zip.value;
    const address = {
      street,
      city,
      state,
      zip
    }
    if(password!==cnfPassword){
      alert("password not match");
    }else{
      const result = await fetchDataFromApi("/register",{name,email,password,phone,address},"POST");
      console.info(result)
    if(!result.loggedIn){
      alert(result.message);
    }else{
      setUser(result.data);
      navigate("/");
    }
    }
  }
  return (
    <div>
      <form className='rigesterForm' onSubmit={handleForm}>
      <input className='inputField' name='name' placeholder='Name' type='text'/>
        <input className='inputField' name='email' placeholder='Email' type='email'/>
        <input className='inputField' name='phone' placeholder='Phone Number' type='number'/>
        <input className='inputField' name='password' placeholder='Password' type='password'/>
        <input className='inputField' name='cnfPassword' placeholder='Confirm Password' type='password'/>
        <input className='inputField' name='street' placeholder='Street' type='text'/>
        <input className='inputField' name='city' placeholder='City' type='text'/>
        <input className='inputField' name='state' placeholder='State' type='text'/>
        <input className='inputField' name='zip' placeholder='Pin code' type='Number'/>
        <button className='btn'>Register</button>
        <div className="goto" onClick={()=>{navigate("/login")}}>login page</div>
      </form>
    </div>
  )
}

export default index
