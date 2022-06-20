import React from "react";
import Button from "../../../UI/Button/Button";
import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";
export default function Nav({ isMenu, menuToggle }) {
  return (
    <nav className={isMenu ? classes.menu_nav : classes.nav}>
      <ul className={`d-flex`}>
        <li onClick={menuToggle}>
          <Link
            className={`d-flex align-items-center justify-content-center`}
            to="/locations"
          >
            Locations
          </Link>
        </li>
        <li onClick={menuToggle}>
          <Link
            className={`d-flex align-items-center justify-content-center`}
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li onClick={menuToggle}>
          <Link
            className={`d-flex align-items-center justify-content-center`}
            to="/learnmore"
          >
            Learn More
          </Link>
        </li>
      </ul>
      <Button to="/booknow" className={classes.booknow} onClick={menuToggle}>
        Book Now
      </Button>
    </nav>
  );
}
