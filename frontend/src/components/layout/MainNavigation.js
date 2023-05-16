import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import CartButton from "../UI/CartButtton";

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/Homepage">Foods</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
