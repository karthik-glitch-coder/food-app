import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Logout");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "system-ui, Roboto",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "system-ui, Roboto",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "system-ui, Roboto",
              }}
            >
              Contact Us
            </Link>
          </li>
          <li style={{ fontFamily: "system-ui, Roboto" }}>Cart</li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
            className="login"
            style={{ fontFamily: "system-ui, Roboto" }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
