import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Button.module.scss";

export default function Button({ outline, children, onClick, to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onClick && onClick();
        navigate(to);
      }}
      className={`${classes.button} ${outline ? classes.outline : ""}`}
    >
      {children}
    </button>
  );
}
