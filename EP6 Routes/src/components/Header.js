import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

function Header() {
  const [login, setLogin] = useState("Login");

  function handleLogin() {
    setLogin(login === "Login" ? "Logout" : "Login");
  }
  const widthImg = "10%";
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={LOGO_URL} alt="" width={widthImg} />
      </div>

      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>History</li>
          <li>Cart</li>
          <li>
            <button className="button" onClick={handleLogin} id="login">
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
