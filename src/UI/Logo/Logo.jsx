import React from "react";
import classes from "./Logo.module.scss";
import LeafSVG from "./../../assets/LeafSVG";

export default function Logo() {
  return (
    /*  <a href="/" className={`${classes.logo} d-flex align-items-center`}>
      <LeafSVG fillcolow={"white"} />
      <span>Tropic</span>
    </a> */
    <a
      href="/"
      className={`${classes.logo} d-flex align-items-center `}
    >
      <LeafSVG fillColor={"white"} />
      <span>Tropic</span>
    </a>
  );
}
