import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

import classes from "./Header.module.css";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

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
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/countries"
            >
              Countries
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Ejercicio UT5.1.2: selector de modo light/dark disponible en todas las páginas */}
      <button
        type="button"
        className={classes.themeToggle}
        onClick={toggleTheme}
      >
        {darkMode ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
    </header>
  );
};

export default Header;
