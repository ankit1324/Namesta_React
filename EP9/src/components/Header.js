import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

function Header() {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li style={{ width: "90px" }}>
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/offer">Offers</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/aboutUs">About</Link>
          </li>
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
