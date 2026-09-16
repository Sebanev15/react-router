import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import {useTheme} from "../context/ThemeContext.jsx";
const ListItem = ({ countrieItem }) => {
  const [item, setItem] = useState(countrieItem);
  const { darkMode } = useTheme();
  return (
    <li className={darkMode ? "dark-mode " : "light-mode " + " contenedorPais " }>
      <img className="banderaPais" src={item.flags.svg}/>
      <section className={darkMode ? "dark-mode" : "light-mode" + classes.textSection }>
        <h2>{item.name}</h2>
          <p>{item.subregion}</p>
        <Link className={classes} to={`${item.alpha3Code}`}>
          Details
        </Link>
      </section>
    </li>
  );
};

export default ListItem;
