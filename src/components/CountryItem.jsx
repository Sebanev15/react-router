import { Link } from "react-router-dom";
import classes from "./CountryItem.module.css";

const CountryItem = ({ countryItem }) => {
  return (
    <li className={classes.itemCard}>
      <img
        className={classes.flag}
        src={countryItem.flags?.png}
        alt={`Flag of ${countryItem.name}`}
      />
      <section className={classes.textSection}>
        <h2>{countryItem.name}</h2>
        <Link className={classes.button} to={`${countryItem.alpha2Code}`}>
          Details
        </Link>
      </section>
    </li>
  );
};

export default CountryItem;
