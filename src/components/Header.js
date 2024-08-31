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
                fontFamily: "Helvetica",
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
                fontFamily: "Helvetica",
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
                fontFamily: "Helvetica",
              }}
            >
              Contact Us
            </Link>
          </li>
          <li style={{ fontFamily: "Helvetica" }}>Cart</li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
            className="login"
            style={{ fontFamily: "Helvetica" }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
