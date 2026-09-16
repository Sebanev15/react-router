import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ListItem = ({ countrieItem }) => {
  const [item, setItem] = useState(countrieItem);

  return (
    <li className={classes.itemCard + " contenedorPais"}>
      <img className="banderaPais" src={item.flags.svg}/>
      <section className={classes.textSection}>
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
