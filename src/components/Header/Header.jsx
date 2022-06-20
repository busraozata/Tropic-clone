import React from "react";
import { useState } from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <i className="fa-solid fa-bars" onClick={handleMenuToggle}></i>
  ) : (
    <i className="fas fa-times" onClick={handleMenuToggle}></i>
  );

  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <div className={classes.header_menu}>
        <div className={classes.header_menu_toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
}
