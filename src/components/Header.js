import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between z-50 bg-white shadow-lg fixed top-0 left-0 right-0 select-none">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-40" src={APP_LOGO} />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="flex list-none px-12 text-lg">
          <li className="p-5 m-5 no-underline font-roboto text-gray-600">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-5 m-5 no-underline font-roboto text-gray-600 hover:text-orange-500 transition duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-5 m-5 no-underline font-roboto text-gray-600 hover:text-orange-500 transition duration-300">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-5 m-5 no-underline font-roboto text-gray-600 hover:text-orange-500 transition duration-300">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="p-5 m-5 no-underline font-roboto text-gray-600 hover:text-orange-500 transition duration-300">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="p-5 m-5 no-underline font-roboto font-bold text-gray-600 hover:text-orange-500 transition duration-300">
            <Link to={"/cart"}>Cart[{cartItems.length}]</Link>
          </li>
          <li className="p-5 m-5 no-underline font-roboto text-gray-600">
            <span className="font-semibold underline">User</span> :{" "}
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
