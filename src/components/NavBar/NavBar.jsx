import React from "react";
import NavBarCSS from "./styles.module.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../public/assets/logo.webp";

const NavBar = () => {
  console.log(NavBarCSS);
  return (
    <div id={NavBarCSS.navbar}>
      <img src={logo} alt="" />
      <div id={NavBarCSS.navItems}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Search</li>
          <li>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
