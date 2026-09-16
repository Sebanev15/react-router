import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className={classes.themeToggle}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
    </header>
  );
};

export default Header;
