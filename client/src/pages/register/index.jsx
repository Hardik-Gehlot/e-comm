import React from "react";
import "./style.scss";
import { fetchDataFromApi } from "../../utils/Api";
import { setUser } from "../../utils/Storage";
import { useNavigate } from "react-router-dom";
function index() {
  const navigate = useNavigate();
  async function handleForm(e) {
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
      zip,
    };
    if (password !== cnfPassword) {
      alert("password not match");
    } else {
      const result = await fetchDataFromApi(
        "/register",
        { name, email, password, phone, address },
        "POST"
      );
      console.info(result);
      if (!result.loggedIn) {
        alert(result.message);
      } else {
        setUser(result.data);
        navigate("/");
      }
    }
  }
  return (
    <div className="registrationSection">
      <div class="cardRegistration">
        <form class="rigisterForm" onSubmit={handleForm}>
          <div className="formTitle">
            <h1>Register</h1>
          </div>
          <div className="infoGroup">
            <div className="inputGroup">
              <label for="name">Name:</label>
              <br />
              <input
                class="inputField"
                name="name"
                id="name"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="inputGroup">
              <label for="phone">Phone Number:</label>
              <br />
              <input
                class="inputField"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                type="number"
              />
            </div>
          </div>
          <div className="authGroup">
            <div className="inputGroup">
              {" "}
              <label for="email">Email:</label> <br />
              <input
                class="inputField"
                name="email"
                id="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="inputGroup">
              <label for="password">Password:</label> <br />
              <input
                class="inputField"
                name="password"
                id="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="inputGroup">
              <label for="cnfPassword">Confirm Password:</label> <br />
              <input
                class="inputField"
                name="cnfPassword"
                id="cnfPassword"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </div>
          <div className="addressGroup">
            <div className="inputGroup">
              <label for="street">Street:</label> <br />
              <input
                class="inputField"
                name="street"
                id="street"
                placeholder="Street"
                type="text"
              />{" "}
            </div>
            <div className="inputGroup">
              <label for="city">City:</label> <br />
              <input
                class="inputField"
                name="city"
                id="city"
                placeholder="City"
                type="text"
              />{" "}
            </div>
            <div className="inputGroup">
              <label for="state">State:</label> <br />
              <input
                class="inputField"
                name="state"
                id="state"
                placeholder="State"
                type="text"
              />{" "}
            </div>
            <div className="inputGroup">
              <label for="zip">Pin code:</label> <br />
              <input
                class="inputField"
                name="zip"
                id="zip"
                placeholder="Pin code"
                type="number"
              />
            </div>
          </div>
          <div class="logindiv">
            <div class="btn">Register</div>
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
                navigate("/login");
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
