import React from "react";
import "./style.scss";
import { fetchDataFromApi } from "../../utils/Api";
import { setSeller } from "../../utils/Storage";
import { useNavigate } from "react-router-dom";
function index() {
  const navigate = useNavigate();
  async function handleForm(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const result = await fetchDataFromApi(
      "/seller/login",
      { email, password },
      "POST"
    );
    if (!result.loggedIn) {
      alert(result.message);
    } else {
      setSeller(result.data);
      navigate("/seller");
    }
  }
  return (
    <div className="sellerLoginSection">
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
                navigate("/seller/register");
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
            type="text"
          />
          <div className="logindiv">
            <div className="btn">Login</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
