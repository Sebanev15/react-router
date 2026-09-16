import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import {useTheme} from "../context/ThemeContext.jsx";
const ListItem = ({ countrieItem }) => {
  const [item, setItem] = useState(countrieItem);
  const { darkMode } = useTheme();
  return (
    <li className={darkMode ? "dark-mode" : "light-mode" + classes.itemCard + " contenedorPais " }>
      <img className="banderaPais" src={item.flags.svg}/>
      <section className={classes.textSection + darkMode ? "dark-mode" : "light-mode"}>
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
