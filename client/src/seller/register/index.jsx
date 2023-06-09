import React from "react";
import "./style.scss";
import { fetchDataFromApi } from "../../utils/Api";
import { setSeller } from "../../utils/Storage";
import { useNavigate } from "react-router-dom";
function index() {
  const navigate = useNavigate();
  async function handleForm(e) {
    e.preventDefault();
    const shopName = e.target.elements.shopName.value;
    const owner = e.target.elements.owner.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const password = e.target.elements.password.value;
    const cnfPassword = e.target.elements.cnfPassword.value;
    const address = e.target.elements.address.value;
    const type = e.target.elements.type.value;
    if (password !== cnfPassword) {
      alert("password not match");
    } else {
      const result = await fetchDataFromApi(
        "/seller/register",
        { shopName, email, password, owner, phone, address, type },
        "POST"
      );
      console.info(result);
      if (!result.loggedIn) {
        alert(result.message);
      } else {
        setSeller(result.data);
        navigate("/seller");
      }
    }
  }
  return (
    <div className="sellerRegistrationSection">
      <div className="cardRegistration">
        <form className="rigisterForm" onSubmit={handleForm}>
          <div>
            <h1>Register</h1>
          </div>
          <input
            className="inputField"
            name="shopName"
            placeholder="Shop name"
            type="text"
          />
          <input
            className="inputField"
            name="owner"
            placeholder="Owner name"
            type="text"
          />
          <input
            className="inputField"
            name="email"
            placeholder="Email"
            type="email"
          />
          <input
            className="inputField"
            name="phone"
            placeholder="Phone Number"
            type="number"
          />
          <input
            className="inputField"
            name="password"
            placeholder="Password"
            type="password"
          />
          <input
            className="inputField"
            name="cnfPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <input
            className="inputField"
            name="address"
            placeholder="Shop Address"
            type="text"
          />
          <input
            className="inputField"
            name="type"
            placeholder="Shop Category(grocery)"
            type="text"
          />
          <div className="logindiv">
            <div className="btn">Register</div>
          </div>
        </form>
      </div>
      <div className="goto">
        <div className="container">
          <h1>WELCOME</h1>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nam
            nostrum repellendus voluptatibus cum praesentium minima sit placeat
            adipisci velit!
          </div>

          <div className="btndiv">
            <button
              className="go"
              onClick={() => {
                navigate("/seller/login");
              }}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
