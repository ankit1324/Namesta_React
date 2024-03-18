import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO from "../../public/logo.png";

function Header() {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the Store by Selector (Redux)\
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  function handleLogin() {
    setLogin(login === "Login" ? "Logout" : "Login");
  }
  return (
    <div className="flex justify-between bg-yellow-200">
      <Link to={"/"}>
        <div className="logo w-32 m-4">
          <img src={LOGO} alt="" />
        </div>
      </Link>

      <div className="menu ">
        <ul className="hidden p-4 m-4  md:flex">
          <li className="px-6 py-2 font-medium hover:text-orange-700">
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-6 py-2 font-medium hover:text-orange-700">
            <Link to="/">Home </Link>
          </li>
          <li className="px-6 py-2 font-medium hover:text-orange-700">
            <Link to="/offer">Offers</Link>
          </li>
          <li className="px-6 py-2 font-medium  hover:text-orange-700">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-6 py-2 font-medium hover:text-orange-700">
            <Link to="/aboutUs">{loggedInUser}</Link>
          </li>
          <li className=" px-6 py-2 font-semibold rounded dark:bg-orange-500 dark:text-gray-800 hover:text-white hover:bg-orange-700">
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
